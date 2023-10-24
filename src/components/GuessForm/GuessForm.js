import React from "react";

function GuessForm({ onAddGuess, isDisabled }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isDisabled}
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(e) => setGuess(String(e.target.value).toUpperCase())}
        required
      />
    </form>
  );
}

export default GuessForm;
