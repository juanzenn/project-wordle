import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, 5).map((value) => (
        <span
          key={value}
          className={`cell ${guess?.[value] ? guess?.[value]?.status : ""}`}
        >
          {guess?.[value]?.letter ?? ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
