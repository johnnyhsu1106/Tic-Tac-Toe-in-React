import React from 'react';
import Header from './components/header';
import Board from './components/board';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).fill(null)}], // stack to store the values
            step: 0,
            xIsNext: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.step + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.getWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([ {squares: squares}]),
            step: history.length,
            xIsNext: !this.state.xIsNext
        });
    }
    handleReset() {
        this.setState({
            history: [{ squares: Array(9).fill(null)}], // stack to store the values
            step: 0,
            xIsNext: true
        });
    }
    getWinner(squares) {
        const combination = [[0, 1, 2],
                       [3, 4, 5],
                       [6, 7, 8],
                       [0, 3, 6],
                       [1, 4, 7],
                       [2, 5, 8],
                       [0, 4, 8],
                       [2, 4, 6]];
        let size = combination.length;
        for (let i = 0; i < size; i++) {
            const [a, b, c] = combination[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a];
            }
        }
      return null;
    }
    render() {
        const title = 'Tic Tac Toe';
        const history = this.state.history;
        const current = history[this.state.step];
        const winner = this.getWinner(current.squares);

        let status;
        if (winner) {
          status = "Winner: " + winner;
        } else {
          status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
        <div id='app'>
            <Header title={title} />
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        handleClick={(i) => {this.handleClick(i)}}
                    />
                </div>

            </div>
            <div className="game-info">
                <div id='status'>{status}</div>
                <div id='reset'><button onClick={this.handleReset}> Restart </button></div>
            </div>
        </div>
        );
    }
}

export default App;
