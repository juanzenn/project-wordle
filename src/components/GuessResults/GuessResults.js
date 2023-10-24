import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((value) => {
        const guess = guesses[value] ?? "";

        return <Guess key={value} guess={guess} />;
      })}
    </div>
  );
}

function Guess({ guess }) {
  const row = guess?.split("");

  return (
    <p className="guess">
      {range(0, 5).map((value) => (
        <span key={value} className="cell">
          {row?.[value] ?? ""}
        </span>
      ))}
    </p>
  );
}

export default GuessResults;
