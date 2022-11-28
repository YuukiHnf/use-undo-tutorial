import useUndo from "use-undo";

const Undo = () => {
  const [
    countState,
    {
      set: setCount,
      reset: resetCount,
      undo: undoCount,
      redo: redoCount,
      canUndo,
      canRedo
    }
  ] = useUndo(0);

  const { present: PresentCount } = countState;

  return (
    <div>
      <p>present count : {PresentCount}</p>
      <button onClick={() => setCount(PresentCount + 1)}>plus</button>
      <button onClick={() => setCount(PresentCount - 1)}>decrement</button>
      <p>History...</p>
      <button onClick={undoCount} disabled={!canUndo}>
        undo
      </button>
      <button onClick={redoCount} disabled={!canRedo}>
        redo
      </button>
    </div>
  );
};

export default Undo;
