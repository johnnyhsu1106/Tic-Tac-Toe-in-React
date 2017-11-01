import React from 'react';

const Square = (props) => {
    return (
        <button
            disabled={props.value? true : false}
            className="square"
            onClick={props.handleClick}>
            {props.value}
        </button>
    );
}
export default Square;
