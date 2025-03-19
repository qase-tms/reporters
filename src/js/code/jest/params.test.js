const { qase } = require("jest-qase-reporter/jest");
// ANCHOR: syntax
//const testCases = [
//  { browser: "Chromium", username: "@alice", password: "123" },
//  { browser: "Firefox", username: "@bob", password: "456" },
//  { browser: "Webkit", username: "@charlie", password: "789" },
//];
//
//testCases.forEach(({ browser }) => {
//  it(`Test login with ${browser}`, () => {
//    qase.title("Verify if page loads on all browsers");
//
      qase.parameters({ Browser: browser });  // Single parameter
//  // test logic

//testCases.forEach(({ username, password }) => {
//  it(`Test login with ${username} using qase.groupParameters`, () => {
//    qase.title("Verify if user is able to login with their username.");

      qase.groupParameters({  // Group parameters
        Username: username,
        Password: password,
        });
//  // test logic
// ANCHOR_END: syntax

const testCases = [
  { browser: "Chromium", username: "@alice", password: "123" },
  { browser: "Firefox", username: "@bob", password: "456" },
  { browser: "Webkit", username: "@charlie", password: "789" },
];

describe("Example param.test.js\tSingle Parameter", () => {
  testCases.forEach(({ browser }) => {
    it(`Test login with ${browser}`, () => {
      qase.title("Verify if page loads on all browsers");

      /*
       * Instead of creating three separate test cases in Qase, this method will add a 'browser' parameter, with three values.
       */

      qase.parameters({ Browser: browser });

      expect(true).to.equal(true);
    });
  });
});

describe("Example param.test.js\tGroup Parameter", () => {
  testCases.forEach(({ username, password }) => {
    it(`Test login with ${username} using qase.groupParameters`, () => {
      qase.title("Verify if user is able to login with their username.");

      /*
       * Here, we're grouping the username and password parameters to track them together, as a set of parameters for the test.
       * This will show the username and password combinations for the test.
       */

      qase.groupParameters({
        Username: username,
        Password: password,
      });

      expect(true).to.equal(true);
    });
  });
});
