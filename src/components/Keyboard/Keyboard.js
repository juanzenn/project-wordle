import React from "react";

const ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function Keyboard({ validatedGuesses }) {
  let status = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach((output) => {
      status[output.letter] = output.status;
    });
  });

  return (
    <div>
      {ROWS.map((row, idx) => {
        const letters = row.split("");

        return (
          <div key={idx} className="keyboard-row">
            {letters.map((letter) => {
              return (
                <span
                  key={letter}
                  className={`keyboard-row__cell ${status[letter]}`}
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
