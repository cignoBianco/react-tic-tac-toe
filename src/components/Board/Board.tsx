import Square from '../Square';
import './Board.css';

type BoardProps = {
    squares: string[];
}

export const Board = ({ }: BoardProps) => (
    <div className='board'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
    </div>
);