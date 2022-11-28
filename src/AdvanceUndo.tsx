import { useState } from "react";
import useUndo from "use-undo";

const Undo = () => {
  const [
    namesState,
    { set: setValue, reset: reset, undo: undo, redo: redo, canUndo, canRedo }
  ] = useUndo<string[]>([]);

  const { present } = namesState;
  const [inputtingText, setInputtingText] = useState("");

  return (
    <div>
      <br />
      <input type="text" onChange={(e) => setInputtingText(e.target.value)} />
      <button onClick={() => setValue([...present, inputtingText])}>
        save
      </button>
      <p>present's length : {present.length}</p>
      <li>
        {present.map((value) => (
          <ul key={value}>{value}</ul>
        ))}
      </li>
      <p>History...</p>
      <button onClick={undo} disabled={!canUndo}>
        undo
      </button>
      <button onClick={redo} disabled={!canRedo}>
        redo
      </button>
    </div>
  );
};

export default Undo;
