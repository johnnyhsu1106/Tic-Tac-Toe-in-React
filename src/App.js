import React from 'react';
import Header from './components/header';
import Board from './components/board';
import Info from './components/info';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: new Array(9).fill(null),
            xIsNext: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleClick(i) {
        const squares = this.state.squares;
        if (this.getWinner(squares)) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState((prevState) => {
            return {
                squares: squares,
                xIsNext: !prevState.xIsNext
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                squares: new Array(9).fill(null),
                xIsNext: true
            }
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

        for (let [a, b, c] of combination) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
      return null;
    }
    render() {
        const title = 'Tic Tac Toe';
        const winner = this.getWinner(this.state.squares);

        return (
        <div id='app'>
            <Header title={title} />
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        handleClick={(i) => {this.handleClick(i)}}
                    />
                </div>

            </div>
            <div className="game-info">
                <Info
                    id='status'
                    winner = {winner}
                    squares = {this.state.squares}
                    xIsNext= {this.state.xIsNext}
                    handleReset={this.handleReset}
                />
            </div>
        </div>
        );
    }
}
export default App;
