import React from "react";

function Banner({ guessesLens, answer, type }) {
  return (
    <div className={`banner ${type}`}>
      {type === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessesLens} guesses</strong>.
        </p>
      ) : type === "sad" ? (
        <p>
          Sorry, the correct answer is{" "}
          <strong>{String(answer).toUpperCase()}</strong>.
        </p>
      ) : null}
    </div>
  );
}

export default Banner;
