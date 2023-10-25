import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import Banner from "../Banner";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [status, setStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  function addGuess(guess) {
    const newGuesses = [...guesses];
    newGuesses.push(guess);
    setGuesses(newGuesses);

    if (guess === answer.toUpperCase()) {
      setStatus("won");
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("lose");
    }
  }

  function handleRestartGame() {
    setAnswer(sample(WORDS));
    setStatus("running");
    setGuesses([]);
  }

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessForm isDisabled={status !== "running"} onAddGuess={addGuess} />
      <Keyboard validatedGuesses={validatedGuesses} />

      {status !== "running" && (
        <Banner
          answer={answer}
          guessesLens={guesses.length}
          status={status}
          onRestart={handleRestartGame}
        />
      )}
    </>
  );
}

export default Game;
