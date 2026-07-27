import Board from '../Board';
import './Game.css'

type GameProps = {

}

export const Game = ({ }: GameProps) => (
    <div className="wrapper">
        <Board />
    </div>
);