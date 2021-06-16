import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { doneTask, removeTask } from "../actions";

export const Todolist = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLink = (path) => history.push(path);
  const lists = useSelector((state) => state.todo.lists);
  const doneTodo = (index) => {
    dispatch(doneTask(index));
  };
  const removeTodo = (index) => {
    dispatch(removeTask(index));
  };
  // console.log(lists);
  return (
    <React.Fragment>
      <h2>Todo List</h2>
      <Link to="/createtickets">Create Tickets</Link>
      <ol>
        {lists.map((todo, index) => {
          return (
            <li key={todo.id}>
              {todo.done ? (
                <del>
                  <Link to={`/detailtickets/${todo.id}`}>{todo.task}</Link>
                </del>
              ) : (
                <span>
                  <Link to={`/detailtickets/${todo.id}`}>{todo.task}</Link>
                </span>
              )}
              &emsp;
              <span>{todo.person}</span>&emsp;
              <button onClick={() => doneTodo(index)}>Done</button>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          );
        })}
      </ol>
    </React.Fragment>
  );
};

// const mapStateToProps = (state) => {
//   return { todo: state.todo.lists };
// };
// export default connect(mapStateToProps)(Todolist);
