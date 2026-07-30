import Square from '../Square';
import './Board.css';

type BoardProps = {
    squares: string[];
    click: (index: number) => void;
}

export const Board = ({ squares, click }: BoardProps) => (
    <div className='board'>
        {squares.map((square, index) => (
            <Square key={index} value={square} onClick={() => click(index)} />
        ))}
    </div>
);