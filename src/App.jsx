/* eslint-disable no-dupe-keys */
//import the react and react-dom libraries
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Box } from './Components/Box';
import { Fragment } from 'react';
import { Button } from './UI/Button';
import { ScoreBoard } from './Components/ScoreBoard';
import { pickRandomPlayer } from './HelperFunction/pickRandomPlayer';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { isWinner } from './HelperFunction/isWinner';

import styles from './index.module.css';
import toast, { Toaster } from 'react-hot-toast';

//create a react component
export const App = () => {
    const resetGameHandler = () => {
        setBoard(Array(9).fill(''));
        setTurn(pickRandomPlayer(2) ? 'player1' : 'player2');
        setGameFinish(false);
        setCounter(1);
        setWinner('');
    };
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [player1Marker, player2Marker] = ['X', 'O'];
    const [board, setBoard] = useState(Array(9).fill(''));
    const [turn, setTurn] = useState(pickRandomPlayer(2) ? 'player1' : 'player2');
    const [gameFinish, setGameFinish] = useState(false);
    const [counter, setCounter] = useState(1);
    const [winner, setWinner] = useState('');
    const boardClass = (index) => {
        return classNames({
            'border-bottom border-right': index === 0 || index === 3,

            'border-bottom border-left':
                index === 1 || index === 2 || index === 4 || index === 5,

            'border-top border-right': index === 6,
            'border-top border-left': index === 7 || index === 8,
        });
    };

    console.log(turn);

    console.log(player1Marker, player2Marker);
    const onClickHandler = (num) => {
        if (winner || gameFinish) {
            return;
        }
        if (board[num]) {
            return toast.error('The Box is already clicked');
        }
         setCounter((prev) => {
             return prev + 1;
         });
        console.log(counter);
        console.log(player1Score, player2Score);
        turn === 'player1'
            ? setBoard((prev) => {
                  prev[num] = player1Marker;
                  setTurn('player2');
                  
                  if (isWinner(board)) {
                      setGameFinish(true);
                      setWinner(turn);

                      setPlayer1Score((prev) => {
                          return prev + 1;
                      });
                  }
                  return prev;
              })
            : setBoard((prev) => {
                  setTurn('player1');
                  prev[num] = player2Marker;
                 
                  if (isWinner(board)) {
                      setGameFinish(true);
                      setWinner(turn);

                      setPlayer2Score((prev) => {
                          return prev + 1;
                      });
                  }

                  return prev;
              });

        counter === 9 && setGameFinish(true);
    };

    return (
        <Fragment>
            <ScoreBoard player1Score={player1Score} player2Score={player2Score} />

            {gameFinish && !winner && (
                <h3 className={styles.turn}>The game is draw. You both are Dumbass</h3>
            )}

            {winner && (
                <h3 className={styles.turn}>
                    {turn === 'player1' ? 'Winner is Player 2' : 'Winner is player 1'}
                </h3>
            )}
            {!gameFinish && !winner && (
                <h3 className={styles.turn}>
                    {`Turn : ${turn}`} : {turn === 'player1' ? player1Marker : player2Marker}{' '}
                </h3>
            )}

            <div className={styles.wrapper}>
                {board.map((a, index) => {
                    return (
                        <Box
                            key={nanoid()}
                            className={boardClass(index)}
                            id={index}
                            onClick={() => onClickHandler(index)}
                            value={board[index]}
                        />
                    );
                })}
            </div>
            <Button text="Reset Game" onClick={resetGameHandler}></Button>
        </Fragment>
    );
};

//Take the react component and show it on the screen

/* <div className={styles.row}>
                    <Box
                        className="border-bottom border-right"
                        id="0"
                        onClick={() => onClickHandler(0)}
                        value={board[0]}
                    />
                    <Box
                        className="border-bottom border-left"
                        id="1"
                        onClick={() => onClickHandler(1)}
                        value={board[1]}
                    />
                    <Box
                        className="border-bottom border-left"
                        id="2"
                        onClick={() => onClickHandler(2)}
                        value={board[2]}
                    />
                </div>
                <div className={styles.row}>
                    <Box
                        className="border-bottom border-right"
                        id="3"
                        onClick={() => onClickHandler(3)}
                        value={board[3]}
                    />
                    <Box
                        className="border-bottom border-left"
                        id="4"
                        onClick={() => onClickHandler(4)}
                        value={board[4]}
                    />
                    <Box
                        className="border-bottom border-left"
                        id="5"
                        onClick={() => onClickHandler(5)}
                        value={board[5]}
                    />
                </div>
                <div className={styles.row}>
                    <Box
                        className="border-right border-top"
                        id="6"
                        onClick={() => onClickHandler(6)}
                        value={board[6]}
                    />
                    <Box
                        className="border-left border-top"
                        id="7"
                        onClick={() => onClickHandler(7)}
                        value={board[7]}
                    />
                    <Box
                        className="border-left border-top"
                        id="8"
                        onClick={() => onClickHandler(8)}
                        value={board[8]}
                    />
                </div> */
