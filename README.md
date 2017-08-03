## RiskSense Frontend Programming Test

### Test Setup
1. You need a have a Google account so you can submit the zipped file of all your answers using Google Drive
1. Ensure you have a modern version of NodeJS (>6.0, v6.11.0 LTS safest option) and NPM (>3.0) installed
2. Extract the contents of the zip folder
3. Run NPM install in the extracted folder to install all the dependencies.  You can add dependencies if you wish, but it shouldn't be necessary.

### General Requirements
* Complete any **THREE** out of the four problems
* Please avoid pushing the code to a public Github account
* Please do not share your work with others
* Ensure the code is formatted and runs to the best of your ability
* All code must be written with Javascript ES6 (and JSX for React) syntax
* The test should only take a few hours, but you have up to 48 hours to complete
* When you're done, create a zip file with just the four files (Problem1.jsx, problem2.js, problem3.js, problem4.js) and send to ian.carlson@risksense.com using Google Drive. (We use Google Drive because Gmail doesn't allow .js files attached to emails).

### Tips
* The React components can be prototyped by instantiating them in the App.js file and running the command `npm run start`.  The create-react-app CLI was used to generate the seed for this project.
* The answers will be run against unit tests so carefully follow the instructions

### Problem 1: React Component
1. Modify the file called Problem1.jsx in the <project root>/src/ folder
2. Write a React component that satisfies the following requirements:
  * Contains a label element above the input element with the text “First Name”
  * Contains an input element that corresponds to the first name label
  * Contains another label element with the text “Last Name”
  * Contains another input element that corresponds to the last name label
  * Contains a button element with the text “Submit” inside of it
  * When the button is clicked the code will make an HTTP post request using the Fetch API to “/test”.
    In the body of the POST request, there will be two parameters called  “firstName” and “lastName”,
    each containing the values of the input elements respectively. If the response is successful
    create a div element with an attribute `id=“message”` that contains the text “Submit Successful”
  * No additional styling necessary
  * The file must export the component as the default export
  * Refer to the [mockup](./Problem1_mockup.png) for more info

### Problem 2: Redux Reducer
1. Modify the file called problem2.js in the <project root>/src/ folder
2. Write a [Redux](http://redux.js.org/) reducer that inputs an action and returns a new state.
   The form of the action will take the following:

```
dispatch(addStudent({
 id: 3,
 first: 'Beth',
 last: 'Adams',
 dob: '2001-02-15',
}));
```

 The reducer must meet the following requirements:
  * The reducer must check the `id` property in the action against the existing students and determine if it's unique.
  * If the ID already exists then leave the students as is and set the `notification` property to "Unable to add student. ID already exists".
  * If the ID is unique then add the student to the state and set the `notification` property to "New student added".
  * The reducer must not mutate state.

### Problem 3: Functional Programming
1.  Modify the file called problem3.js and write a function that inputs `initialState` from problem2 and returns an object of students.  **Also write a unit test for the function.**
 * The function must use .reduce() and can never mutate the accumulator variable (the first variable passed into the reduce function)
 * The returned object of students must have the following shape: the key is the ID of the student and the value is an object containing the "firstName", "lastName", and "dateOfBirth" properties
 * Export the function with the named export `convertState`
 * The function must not mutate `initialState`
 * Create a folder <project root>/src/test and create a file within it named "problem3.spec.js".  The file should import `initialState` from problem2.js and call the function `convertState` from problem3.js. The test will call `convertState` and pass in `initialState` and verify the output matches expected output below.  *The project already supports Jest testing framework. The Jasmine assertion syntax is already supported so statements like `it('', () => {})` and `expect(true).toBe(true)` will work out of the box. You can run the test by running the command `npm run test`*.

The output of the function `convertState(initialState)` should look like this:
```
{
  '0': { firstName: "Jerry", lastName: "Smith", dateOfBirth: "2002-06-15" },
  '1': { firstName: "Tim", lastName: "Baredo", dateOfBirth: "2002-06-15" },
  '2': { firstName: "Benjamin", lastName: "Klaus", dateOfBirth: "2003-02-13" },
}
```

### Problem 4: Creating a D3 chart
1. Modify the file called problem4.js in the <project root>/src/ folder
2. Plot a simple circular chart showing dots as if on a clock face
  * Your answer must use the **D3 libraries exclusively**
  * You are given data points in an array, each representing an hour and a temperature
  * For each hour, draw a circle in the correct position for that hour, for example, hour 0 is on
    the top, hour 3 is on the right side, hour 6 is on the bottom, and so on
  * Set the fill color for the circle to one that corresponds to the temperature. Use a d3 scale to
    map from 60 to 100 degrees (F) to the colors #8eb7e2 through #f4964e respectively.
  * Align text objects in the circles showing the corresponding hour. They do not have to be
    rotated inside of the circle as in the mockup, but they should be in the circle, and centered
    if possible.
  * If you use `npm run start`, you will see your chart rendered at the bottom of the page
  * Refer to the [mockup](./Problem4_mockup.png) for more info
