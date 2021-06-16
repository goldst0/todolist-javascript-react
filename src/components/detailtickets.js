import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const Detailtickets = () => {
  const { todoId } = useParams();
  const lists = useSelector((state) => state.todo.lists);
  return (
    <React.Fragment>
      {lists
        .filter((todo) => parseInt(todoId, 10) === parseInt(todo.id, 10))
        .map((todo) => {
          return (
            <div key={todo.id}>
              <h2>Detail Tickets</h2>
              <p>Task:{todo.task}</p>
              <p>Detail:{todo.detail}</p>
              <p>Person:{todo.person}</p>
              <p>Deadline:{todo.deadline}</p>
            </div>
          );
        })}
    </React.Fragment>
  );
};
