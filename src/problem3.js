/**
 * @fileOverview Provides stub for problem3.
 * @copyright (C) RiskSense, Inc.
 * @license Proprietary
 */

import { initialState } from "./problem2";

const convertState = (state = initialState) => {
  // your code goes here
  let newState = state.students.slice(0).reduce((obj, student) => {
    const { id, firstName, lastName, dateOfBirth } = student;
    obj[id] = {
      firstName,
      lastName,
      dateOfBirth
    };

    return obj;
  }, {});
  return newState;
};

export { convertState };
