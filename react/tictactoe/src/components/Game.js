import React, { useState } from "react";
import { calculateWinner } from '../helpers'
import Board from "./Board";

const Game = () => {
    // useState hook 
    // Note that this is an array with an array inside, a matrix. 
    const [history, setHistory] = useState([Array(9).fill(null)]);

    const [stepNumber, setStepNumber] = useState(0); // Used in move history

    const [xIsNext, setXisNext] = useState(true);

    const winner = calculateWinner(history[stepNumber]); // Most recent step

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        
        // ... spred operator, makes a shallow copy
        const squares = [...current]; 
        
        if (winner || squares[i]) return;

        squares[i] = xIsNext ? 'X' : 'O';

        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);        
        setXisNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to start';
            
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    )

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className="display">
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                <ul>
                    {renderMoves()}
                </ul>
            </div>
        </> // This is a fragment. We can return only one.
    );
}

export default Game;