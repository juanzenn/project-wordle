import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((value) => {
        const guess = guesses[value] ?? "";

        return <Guess key={value} guess={checkGuess(guess, answer)} />;
      })}
    </div>
  );
}

export default GuessResults;
