import './App.scss';                        //Импорт стилей
import {useState} from 'react';             //Импорт useState
import {calculateWinners} from "./worker";  //Импорт вспомогательных функций

const Square = ({value, onSquareClick}) => {//Клеточка, куда ставят X или O
    const cls = "square " + (value === "X" ? "x-square" : "o-square");  //Класс
    /* Засчёт изменения класса меняются некоторые css-свойства */
    return <div className={cls} onClick={onSquareClick}>{value}</div>;
}

const Board = () => {   //Доска, хранит все необходимые state
    const [turn, setTurn] = useState(true); //Чей сейчас ход
    const [squares, setSquares] = useState(Array(9).fill(null));
    /* squares - массив, в котором хранится состояние поля */
    const [history, setHistory] = useState(Array(0));
    /* Каждый член history - массив squares в момент времени в прошлом */
    function handleClick(i) {   //
        const nextSquares = squares.slice();    // Берём срез-копию
        setHistory(history.slice().concat([nextSquares])); // Вставляет в историю игры новый массив
        nextSquares[i] = turn ? "X" : "O";   // Выбирает между плюсом и минусом
        if (calculateWinners(nextSquares)) { //Проверяем, не выйгрышная ли ситуация на поле
            alert((turn ? "X" : "O") + " wins!");                    // Выводим сообщение о победе
            setSquares(Array(9).slice().fill(null));//
            setTurn(true);  //Устанавливаем снова ход X
            return;
        }
        setTurn(!turn); //Меняет чей сейчас ход
        setSquares(nextSquares);
    }

    const domSquares = Array(9).fill(null)
        .map((e, i) => <Square
            key={Math.random()}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}/>);

    return (<div className={"board"}>
        {domSquares}
    </div>);
}

const App = () => {
    return (
        <div className="App">
            <div className={"board__wrapper"}>
            <Board></Board>
            </div>
        </div>
    );
}

export default App;
