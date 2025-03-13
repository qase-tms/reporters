const { qase } = require("jest-qase-reporter/jest");
// ANCHOR: syntax
// describe("Example: suite.test.js", () => {
//   test("Test with a defined suite", () => {
      qase.suite("Example: suite.test.js\tThis shall be a suite name");
       // //test logic here
//   });
//   test("Test within multiple levels of suite", () => {
      qase.suite("Example: suite.test.js\tThis shall be a suite name\tChild Suite"
      );
      // //test logic here
//   });
// });
// ANCHOR_END: syntax

