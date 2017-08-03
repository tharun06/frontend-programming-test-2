import { initialState } from "./problem2";
import { convertState } from "./problem3";

describe("problem3 tests", () => {
  it("should convert the initial state", () => {
    expect(convertState(initialState)).toEqual({
      "0": { firstName: "Jerry", lastName: "Smith", dateOfBirth: "2002-06-15" },
      "1": { firstName: "Tim", lastName: "Baredo", dateOfBirth: "2002-06-15" },
      "2": {
        firstName: "Benjamin",
        lastName: "Klaus",
        dateOfBirth: "2003-02-13"
      }
    });
  });

  it("should not mutate initial State", () => {
    expect(convertState(initialState)).not.toEqual(initialState);
    expect(initialState.students.length).toEqual(3);
  });
});
