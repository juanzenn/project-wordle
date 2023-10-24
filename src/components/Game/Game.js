import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import Banner from "../Banner";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [showBanner, setShowBanner] = React.useState(false);
  const [bannerType, setBannerType] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    const newGuesses = [...guesses];
    newGuesses.push(guess);
    setGuesses(newGuesses);

    if (guess === answer.toUpperCase()) {
      setBannerType("happy");
      setShowBanner(true);
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setBannerType("sad");
      setShowBanner(true);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessForm isDisabled={showBanner} onAddGuess={addGuess} />
      {showBanner && (
        <Banner
          answer={answer}
          guessesLens={guesses.length}
          type={bannerType}
        />
      )}
    </>
  );
}

export default Game;
