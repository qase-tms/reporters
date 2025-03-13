const { qase } = require("jest-qase-reporter/jest");
// ANCHOR: syntax
// describe("Example: comment.test.js", () => {
//   test("A test case with qase.comment()", () => {
     qase.comment(
       "This comment will be displayed in the 'Actual Result' field of the test result in Qase.",
     );
     //// test logic here
//   });
// });
// ANCHOR_END: syntax
