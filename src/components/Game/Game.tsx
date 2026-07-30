import { useState } from 'react';
import Board from '../Board';
import './Game.css'
import { calculateWinner } from '../../helpers/helper';

type GameProps = {

}

export const Game = ({ }: GameProps) => {
    const [board, setBoard] = useState<string[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [movesPassed, setMovesPassed] = useState(0);
    const winner = calculateWinner(board);

    const handleClick = (index: number) => {
        const boardCopy = [...board];

        if (winner || boardCopy[index]) return;

        boardCopy[index] = xIsNext ? 'x' : 'o';
        setXIsNext(!xIsNext);
        const newMovesPassed = movesPassed + 1;
        setMovesPassed(newMovesPassed);
        if (newMovesPassed === 9) alert('ничья');
        setBoard(boardCopy);
    };

    return (
        <div className="wrapper">
            <Board squares={board} click={handleClick} />
        </div>
    )
};