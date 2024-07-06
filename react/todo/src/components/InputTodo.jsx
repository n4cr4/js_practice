const style = {
  backgroundColor: "aquamarine",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = ({ todoText, onChange, onClick }) => {
  return (
    <div style={style}>
      <input
        type="text"
        placeholder="todo"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>add</button>
    </div>
  );
};
