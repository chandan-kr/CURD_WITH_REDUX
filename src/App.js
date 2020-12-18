import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmpForm from "./EmpForm";
import "./App.css";
import List from "./List";

const App = () => {
  const isEdit = useSelector((state) => state.empReducers.isEdit);

  const dispatch = useDispatch();

  const saveResults = (values) => {
    console.log(values);
    if (isEdit) {
      dispatch({ type: "EMP_EDIT", emp: values });
    } else {
      dispatch({ type: "EMP_ADD", emp: values });
    }
  };
  return (
    <div className="App">
      <EmpForm onSubmit={saveResults} />
      <div className="mb-20">
      <List />
      </div>
    </div>
  );
};

export default App;
