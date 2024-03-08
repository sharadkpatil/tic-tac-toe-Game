import React, { useState } from 'react'
import GameFC from './GameFC'

const Game = () => {
    const [isNext, setIsNext] = useState(true);
    const [value, setValue] = useState(Array(9).fill(null));
    const parentStateEvent = (i)=>{
        if(calculateWinner(value) || value[i])
            return;

        const allElement = value.slice();
        if(isNext)
            allElement[i]= 'x'
        else 
            allElement[i]= 'o'
        setValue(allElement);
        setIsNext(!isNext);
    }    
    const winner = calculateWinner(value);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (isNext ? 'X' : 'O');
    }
  return (    
    <div>
        <div className="status">
            <h2>
            {status}
            </h2>
        </div>
        <div>
            <GameFC value={value[0]} eventP={() => parentStateEvent(0)}></GameFC>
            <GameFC value={value[1]} eventP={() => parentStateEvent(1)}></GameFC>
            <GameFC value={value[2]} eventP={() => parentStateEvent(2)}></GameFC>
        </div>
        <div>
            <GameFC value={value[3]} eventP={() => parentStateEvent(3)}></GameFC>
            <GameFC value={value[4]} eventP={() => parentStateEvent(4)}></GameFC>
            <GameFC value={value[5]} eventP={() => parentStateEvent(5)}></GameFC>
        </div>
        <div>
            <GameFC value={value[6]} eventP={() => parentStateEvent(6)}></GameFC>
            <GameFC value={value[7]} eventP={() => parentStateEvent(7)}></GameFC>
            <GameFC value={value[8]} eventP={() => parentStateEvent(8)}></GameFC>
        </div>
    </div>
  )
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
export default Game