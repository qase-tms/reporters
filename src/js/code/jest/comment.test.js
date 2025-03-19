const { qase } = require("jest-qase-reporter/jest");
// ANCHOR: syntax
// describe("Example: comment.test.js", () => {
//   test("A test case with qase.comment()", () => {
     qase.comment("Add a comment to the result");
     //// test logic here
//   });
// });
// ANCHOR_END: syntax
