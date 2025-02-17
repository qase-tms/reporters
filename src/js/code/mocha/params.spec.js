const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

// ANCHOR: syntax
//const testCases = [
//  { browser: "Chromium", username: "@alice", password: "123" },
//  { browser: "Firefox", username: "@bob", password: "456" },
//  { browser: "Webkit", username: "@charlie", password: "789" },
//];

//describe("Example param.spec.js Single Parameter", function() {
testCases.forEach(({ browser }) => {
  it(`Test login with ${browser}`, function() {
    this.title("Verify if login page loads successfully");

    ////Instead of creating three separate test cases in Qase, this method will add a 'browser' parameter, with three values.
    //
    this.parameters({ Browser: browser });
    //// test logic here
  });
});
//});

//describe("Example param.spec.js Group Parameter", function() {
testCases.forEach(({ username, password }) => {
  it(`Test login with ${username} using qase.groupParameters`, function() {
    this.title("Verify if user is able to login with their username.");

    ////Here, we're grouping the username and password parameters to track them together, as a set of parameters for the test.
    ////This will show the username and password combinations for the test.
    //
    this.groupParameters({
      Username: username,
      Password: password,
    });
    //// test logic here
  });
});
//});
// ANCHOR_END: syntax
