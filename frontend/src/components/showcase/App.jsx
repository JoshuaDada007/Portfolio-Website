import React, {useEffect, useState, useRef} from "react";
import "./app.css";
import {Langz, Letter, Button} from "./Visuals";

export function App() {
    const seeds = [
        {color: "red", name: "JavaScript",},
        {color: "green", name: "Java",},
        {color: "yellow", name: "C++"},
        {color: "purple", name: "Ruby"},
        {color: "orange", name: "GoLang"},
        {color: "aqua", name: "Python"},
        {color: "pink", name: "Swift"},
        {color: "brown", name: "PHP"},
        {color: "gray", name: "CSS"},
        {color: "blue", name: "Assembly"}
    ];
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const keywords = [
        "function",
        "variable",
        "array",
        "object",
        "closure",
        "loop",
        "class",
        "async",
        "promise",
    ];
    const rand = Math.floor(Math.random() * (keywords.length - 1));
    const wordInit = keywords[rand].split("");
    const [word, setWord] = useState(wordObj);
    const [guessed, setGuessed] = useState([]);
    const wrongGuesses = guessed.filter(
        (letter) => !word.some((correctLetter) => letter === correctLetter.value)
    );

    function wordObj() {
        return wordInit.map((letter) => ({
            value: letter,
            show: false,
        }));
    }



    let gameWon = word.every((letter) => letter.show);
    let gameOver = wrongGuesses.length === seeds.length - 1;

    const correctLetters = word.map((letter, index) => {
        return (
            <Letter key={index} value={letter.show && letter.value} show={letter.show}/>
        )

    });

    const buttons = alphabets.split("").map((letter, index) => {
        const isGuessed = guessed.includes(letter);
        const isCorrect = word.some(
            (correctLetter) => letter === correctLetter.value
        );
        return (
            <Button
                value={letter.toUpperCase()}
                key={index}
                id={letter}
                click={click}
                color={
                    isGuessed && isCorrect
                        ? "green"
                        : isGuessed && !isCorrect
                            ? "red"
                            : "#faedcd"
                }
                disabled={gameOver || gameWon}
            />
        );
    });

    function click(id) {
        setGuessed((prevGuessed) =>
            prevGuessed.includes(id) ? prevGuessed : [...prevGuessed, id]
        );
        setWord((prevWord) =>
            prevWord.map((letter) => {
                if (letter.value === id) {
                    letter.show = true;
                }
                return {...letter};
            })
        );
    }

    function newGame() {
        setGuessed([]);
        setWord([...wordObj()]);
    }

    const languages = seeds.map((language, index) => (
        <Langz
            color={language.color}
            value={language.name}
            id={language.id}
            key={language.id}
            opacity={wrongGuesses[index] ? 0.2 : 1}

        />
    ));

    const reference = useRef(null);
    useEffect(() => {
        if (reference.current) {
            reference.current.scrollIntoView({behavior: "smooth"});
        }
    }, [gameOver, gameWon]);

    return (
        <>

            <p align="center">Guess the word in under 8 attempts</p>
            {gameWon ? (
                <div className="status win">
                    <h2>You Win</h2>
                    <p>Well done</p>
                </div>
            ) : gameOver ? (
                <div className="status lose">
                    <h2>You Lose</h2>
                    <p>Womp Womp</p>
                </div>
            ) : null}

            <div className="languages">{languages}</div>
            <div className="word">{correctLetters}</div>
            {gameOver || gameWon ? (
                <p>The correct word is {word.map((letter) => {
                    if (gameWon || gameOver) {
                        letter.show = false;
                    }
                    return letter.value
                }).join("")}</p>
            ) : null}
            <div className="buttons">{buttons}</div>
            {gameOver || gameWon ? (
                <button className="new-game-button" ref={reference} onClick={newGame}>
                    New Game
                </button>
            ) : null}
            <div style={{width: "80%", display: "flex", justifyContent: "flex-end"}}>
            </div>
        </>
    );
}