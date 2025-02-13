import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {calculateWinners} from "./worker";

const Square = ({value, onSquareClick}) => {
    return <button className="square" onClick={onSquareClick}>{value}</button>;
}

const Board = () => {
    const [turn, setTurn] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [history, setHistory] = useState(Array(0));

    function handleClick(i) {
        const nextSquares = squares.slice();
        setHistory(history.slice().concat([nextSquares])); // Вставляет в историю игры новый массив
        nextSquares[i] = turn ? "X" : "O"; // Выбирает между плюсом и минусом
        if (calculateWinners(nextSquares)) {
            alert((turn ? "X" : "O") + " wins!");
        }
        setTurn(!turn); //Меняет чей сейчас ход
        setSquares(nextSquares);
    }

    const domSquares = Array(9).fill(null)
        .map((e, i) => <Square value={squares[i]} onSquareClick={() => handleClick(i)}/>);

    return (<div className={"board"}>
        {domSquares}
    </div>);
}

const App = () => {
    return (
        <div className="App">
            <Board></Board>
        </div>
    );
}

export default App;
