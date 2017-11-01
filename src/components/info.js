import React from 'react';

const Info = (props) => {
    let status;
    if (props.winner) {
        status = <span id='winner'>Winner:  {props.winner}</span>;
    } else if (props.squares.indexOf(null) === -1)  {
        status = 'Restart a new game.' ;
    } else {
        status = "Next player: " + (props.xIsNext ? "X" : "O");
    }
    return (
        <div>
            <p>{status}</p>
            <div id='reset'>
                <button onClick={props.handleReset}>
                    Restart
                </button>
            </div>
        </div>
    );
};
export default Info;
