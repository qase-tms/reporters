const { qase } = require("jest-qase-reporter/jest");
// ANCHOR: syntax
//const testCases = [
//  { browser: "Chromium", username: "@alice", password: "123" },
//  { browser: "Firefox", username: "@bob", password: "456" },
//  { browser: "Webkit", username: "@charlie", password: "789" },
//];
//
//
// describe("Example param.test.js\tSingle Parameter", () => {
//   testCases.forEach(({ browser }) => {
//     test(`Test login with ${browser}`, () => {
//       // qase.title("Verify if login page loads successfully");
       qase.parameters({ Browser: browser });
       //// test logic here
//     });
//   });
// });
//

// describe("Example param.test.js\tGroup Parameter", () => {
//   testCases.forEach(({ username, password }) => {
//     test(`Test login with ${username} using qase.groupParameters`, () => {
//       // qase.title("Verify if user is able to login with their username.");
       qase.groupParameters({
         Username: username,
         Password: password,
       });
       //// test logic here
//     });
//   });
// });
// ANCHOR_END: syntax
