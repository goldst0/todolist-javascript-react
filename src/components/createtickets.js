import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../actions";

export const Createtickets = () => {
  const history = useHistory();
  const handleLink = (path) => history.push(path);
  const dispatch = useDispatch();
  const [Task, setTask] = useState("");
  const [Detail, setDetail] = useState("");
  const [Person, setPerson] = useState("");
  const [Deadline, setDeadline] = useState("");
  const changeTask = (e) => {
    setTask(e.target.value);
  };
  const changeDetail = (e) => {
    setDetail(e.target.value);
  };
  const changePerson = (e) => {
    setPerson(e.target.value);
  };
  const changeDeadline = (e) => {
    setDeadline(e.target.value);
  };
  const addTasks = () => {
    const id = uuidv4();
    dispatch(addTask(id, Task, Detail, Person, Deadline));
    setTask("");
    setDetail("");
    setPerson("");
    setDeadline("");
    handleLink("/");
  };
  return (
    <React.Fragment>
      <h2>Create Tickets</h2>
      <p>
        Task:<input type="text" value={Task} onChange={changeTask}></input>
      </p>
      <p>
        Detail:<textarea value={Detail} onChange={changeDetail}></textarea>
      </p>
      <p>
        Person:
        <input type="text" value={Person} onChange={changePerson}></input>
      </p>
      <p>
        Deadline:
        <input type="date" value={Deadline} onChange={changeDeadline}></input>
      </p>
      <button onClick={addTasks}>Submit</button>
    </React.Fragment>
  );
};
