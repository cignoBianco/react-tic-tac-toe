import { useState } from 'react';
import Board from '../Board';
import './Game.css'
import { calculateWinner } from '../../helpers/helper';

type GameProps = {

}

export const Game = ({ }: GameProps) => {
    const [board, setBoard] = useState<string[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const isDraw = board.every(square => square !== null) && !winner;

    const handleClick = (index: number) => {
        const boardCopy = [...board];

        if (winner || boardCopy[index]) return;

        boardCopy[index] = xIsNext ? 'x' : 'o';
        setXIsNext(!xIsNext);
        setBoard(boardCopy);
    };

    const startNewGame = () => {
        return (
            <button className='start_btn' onClick={() => {
                setBoard(Array(9).fill(null));
                setXIsNext(true);
            }}>очистить поле</button>
        );
    }

    return (
        <div className="wrapper">
            {startNewGame()}
            <Board squares={board} click={handleClick} />
            <p className='game_info'>
                {winner ? `победил ${winner}` : isDraw ? 'ничья' : `ход ${xIsNext ? 'x' : 'o'}`}
            </p>
        </div>
    )
};