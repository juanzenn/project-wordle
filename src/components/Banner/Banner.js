import React from "react";

function Banner({ guessesLens, answer, status, onRestart }) {
  const TYPES = {
    won: "happy",
    lose: "sad",
  };

  return (
    <div className={`banner ${TYPES[status]}`}>
      {status === "won" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessesLens} guesses</strong>.
        </p>
      ) : status === "lose" ? (
        <p>
          Sorry, the correct answer is{" "}
          <strong>{String(answer).toUpperCase()}</strong>.
        </p>
      ) : null}

      <button onClick={onRestart} className="restart">
        Restart
      </button>
    </div>
  );
}

export default Banner;
