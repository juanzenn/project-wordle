import React from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    const newGuesses = [...guesses];
    newGuesses.push(guess);
    setGuesses(newGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm onAddGuess={addGuess} />
    </>
  );
}

export default Game;
