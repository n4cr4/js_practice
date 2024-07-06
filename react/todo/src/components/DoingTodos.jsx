export const DoingTodos = ({ todos, onClickDone, onClickDelete }) => {
  return (
    <div className="doing-area">
      <p className="title">doing</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickDone(index)}>done</button>
              <button onClick={() => onClickDelete(index)}>delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
