import React from "react";
import { checkGuess } from "../../game-helpers";

const ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

function Keyboard({ answer, guesses }) {
  function addClassToCell(letter) {
    for (let i = 0; i < guesses.length; i++) {
      const guess = guesses[i];
      if (!guess) continue;
      const isLetterOnGuess = guess.split("").indexOf(letter);
      if (isLetterOnGuess === -1) continue;

      const { status } =
        checkGuess(guess, answer).find((l) => l.letter === letter) || {};

      return status ?? "";
    }

    return "";
  }

  return (
    <div>
      {ROWS.map((row, idx) => {
        const letters = row.split("");

        return (
          <div key={idx} className="keyboard-row">
            {letters.map((letter) => {
              return (
                <span
                  className={`keyboard-row__cell ${addClassToCell(
                    letter.toLocaleUpperCase()
                  )}`}
                  key={letter}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
