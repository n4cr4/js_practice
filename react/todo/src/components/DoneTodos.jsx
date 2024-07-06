export const DoneTodos = ({todos, onClickReturn}) => {
  return (
    <div className="done-area">
      <p className="title">done</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickReturn(index)}>return</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
