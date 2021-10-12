import React, { useRef } from "react";
import { useReducer } from "react";
import { patientReducer, patientState } from "../PatientReducer/PatientReducer";

const ManagePatient = () => {
  const [state, dispatch] = useReducer(patientReducer, patientState);

  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_PATIENT",
      id: state.patients.length + 1,
      name: nameRef.current.value,
    });
    nameRef.current.value = "";
  };

  return (
    <div>
      <h2>Patient Management Services</h2>
      <h3>Number of Patient {state.patients.length}</h3>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} />
      </form>
      {state.patients.map((pt) => (
        <li
          key={pt.id}
          onClick={() =>
            dispatch({
              type: "REMOVE_PATIENT",
              id: pt.id,
            })
          }
        >
          {pt.name}
        </li>
      ))}
    </div>
  );
};

export default ManagePatient;
