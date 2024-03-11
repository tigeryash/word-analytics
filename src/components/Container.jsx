import Stats from "./Stats";
import TextArea from "./TextArea";
import { useState } from "react";

const Container = () => {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const numberOfWords = text.split(" ").filter((word) => word !== "").length;
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats
        numberOfCharacters={numberOfCharacters}
        numberOfWords={numberOfWords}
      />
    </main>
  );
};

export default Container;
