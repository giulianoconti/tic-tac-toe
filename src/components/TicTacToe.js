import React, { useEffect, useState } from 'react';

export const TicTacToe = () => {

    const [painted, setPainted] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    const [playerTurn, setPlayerTurn] = useState(true);
    const [pointsX, setPointsX] = useState(0);
    const [pointsO, setPointsO] = useState(0);
    const [clicks, setClicks] = useState(0);

    useEffect(() => {

        if (clicks >= 5) {
            if (
                (painted[0] === painted[1] && painted[1] === painted[2]) ||   // horizontal1 -
                (painted[3] === painted[4] && painted[4] === painted[5]) ||   // horizontal2 -
                (painted[6] === painted[7] && painted[7] === painted[8]) ||   // horizontal3 -
                (painted[0] === painted[3] && painted[3] === painted[6]) ||   // vertical1 |
                (painted[1] === painted[4] && painted[4] === painted[7]) ||   // vertical2 |
                (painted[2] === painted[5] && painted[5] === painted[8]) ||   // vertical3 |
                (painted[0] === painted[4] && painted[4] === painted[8]) ||   // oblique1 \
                (painted[2] === painted[4] && painted[4] === painted[6])      // oblique2 /
            ) {
                if (playerTurn) {
                    setPointsO(pO => pO + 1);
                } else {
                    setPointsX(pX => pX + 1);
                }
                setClicks(0);
                setPainted([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                alert(`Point for the ${playerTurn ? 'O' : 'X'}`);
            } else if (clicks === 9) {
                setClicks(0);
                setPainted([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                alert('Tie');
            }
        }

    }, [painted, clicks, playerTurn]);


    const clicked = ({ target }) => {

        let newArrPainted = [...painted];

        if (target.id.includes('X') || target.id.includes('O')) {
            console.log("It's already painted");
        } else if (playerTurn && target.className !== 'flex-container') {
            newArrPainted[target.id] = 'X';
            setClicks(clicks + 1);
            setPlayerTurn(!playerTurn);
        } else if (!playerTurn && target.className !== 'flex-container') {
            newArrPainted[target.id] = 'O';
            setClicks(clicks + 1);
            setPlayerTurn(!playerTurn);
        } else {
            console.log('You touched the container');
        }

        setPainted(newArrPainted);

    };

    return (
        <div className='container'>
            <h1>Tic Tac Toe</h1>
            <h3>X {pointsX} - {pointsO} O</h3>
            <p>Turn of the {playerTurn ? 'X' : 'O'}</p>
            <div className='flex-container' onClick={clicked}>
                <div id={painted[0]}></div>
                <div id={painted[1]}></div>
                <div id={painted[2]}></div>
                <div id={painted[3]}></div>
                <div id={painted[4]}></div>
                <div id={painted[5]}></div>
                <div id={painted[6]}></div>
                <div id={painted[7]}></div>
                <div id={painted[8]}></div>
            </div>
        </div>
    );
};