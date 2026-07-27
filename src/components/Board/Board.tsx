import Square from '../Square';
import './Board.css';

type BoardProps = {}

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