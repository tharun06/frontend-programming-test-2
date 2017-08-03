/**
 * @fileOverview Provides stub for problem2
 * @copyright (C) RiskSense, Inc.
 * @license Proprietary
 */

import { createAction, handleActions } from "redux-actions";

const ADD_STUDENT = "ADD_STUDENT";
const addStudent = createAction(ADD_STUDENT);

const GOOD_NOTIFICATION = "New student Added";
const BAD_NOTIFICATION = "Unable to add student. ID already exists";

const initialState = {
  notification: "",
  students: [
    {
      id: "0",
      firstName: "Jerry",
      lastName: "Smith",
      dateOfBirth: "2002-06-15"
    },
    {
      id: "1",
      firstName: "Tim",
      lastName: "Baredo",
      dateOfBirth: "2002-06-15"
    },
    {
      id: "2",
      firstName: "Benjamin",
      lastName: "Klaus",
      dateOfBirth: "2003-02-13"
    }
  ]
};

function isStudentPresent(students, id) {
  let numStudents = students.length;
  while (numStudents--) {
    if (students[numStudents].id === id) {
      return false;
    }
  }
  return true;
}

const actions = {
  // your code goes here
  [addStudent]: (state, { payload: { student } }) => {
    const { students } = state;
    const { id } = student;
    const present = isStudentPresent(students, id);

    if (present) {
      return Object.assign({}, state, {
        notification: "Unable to add student. ID already exists"
      });
    } else {
      return Object.assign({}, state, {
        notification: "Unable to add student. ID already exists",
        students: [...state.students, student]
      });
    }
  }
};

export { initialState, ADD_STUDENT, GOOD_NOTIFICATION, BAD_NOTIFICATION };

export default handleActions(actions, initialState);
