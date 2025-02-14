export const calculateWinners = (squares) => { //Высчитывает победителя
    return (
        (squares[0] === squares[1] && squares[1] === squares[2] && squares[0] !== null && squares[1] !== null && squares[2] !== null) ||
        (squares[3] === squares[4] && squares[4] === squares[5] && squares[3] !== null && squares[4] !== null && squares[5] !== null) ||
        (squares[6] === squares[7] && squares[7] === squares[8] && squares[6] !== null && squares[7] !== null && squares[8] !== null) ||
        (squares[0] === squares[3] && squares[3] === squares[6] && squares[0] !== null && squares[3] !== null && squares[6] !== null) ||
        (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] !== null && squares[4] !== null && squares[7] !== null) ||
        (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !== null && squares[5] !== null && squares[8] !== null) ||
        (squares[0] === squares[4] && squares[4] === squares[8] && squares[0] !== null && squares[4] !== null && squares[8] !== null) ||
        (squares[2] === squares[4] && squares[4] === squares[6] && squares[2] !== null && squares[4] !== null && squares[6] !== null)
    );
}
