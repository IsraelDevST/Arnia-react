import React, { useState } from "react";

const HangmanGame = () => {
  const secretWord = "OPOSTO";
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [disabledLetters, setDisabledLetters] = useState([]);

  const handleGuess = (letter) => {
    // Verifica se a letra já foi adivinhada ou está desabilitada
    if (guessedLetters.includes(letter) || disabledLetters.includes(letter)) {
      return;
    }

    // Verifica se a letra está correta
    if (secretWord.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setRemainingAttempts(remainingAttempts - 1);
    }

    // Desabilita a letra clicada
    setDisabledLetters([...disabledLetters, letter]);
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const renderWord = () => {
    return secretWord.split("").map((letter, index) => (
      <span key={index} className="letter">
        {guessedLetters.includes(letter) ? letter : "_"}
      </span>
    ));
  };

  const renderAlphabet = () => {
    return alphabet.split("").map((letter) => {
      const isDisabled =
        guessedLetters.includes(letter) ||
        (!secretWord.includes(letter) && remainingAttempts === 0) ||
        disabledLetters.includes(letter); // Verifica se a letra já foi adivinhada ou está desabilitada

      return (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={isDisabled}
        >
          {letter}
        </button>
      );
    });
  };

  return (
    <div>
      <h1>Jogo da Forca</h1>
      <div className="word">{renderWord()}</div>
      <div>Tentativas Restantes: {remainingAttempts}</div>
      <div>{renderAlphabet()}</div>
    </div>
  );
};

export default HangmanGame;
