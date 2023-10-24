import React from "react";

function GuessForm() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(guess);

    setGuess("");
  }

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
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
