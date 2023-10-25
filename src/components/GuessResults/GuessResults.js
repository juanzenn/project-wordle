import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ validatedGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((value) => {
        return <Guess key={value} guess={validatedGuesses[value] ?? ""} />;
      })}
    </div>
  );
}

export default GuessResults;
