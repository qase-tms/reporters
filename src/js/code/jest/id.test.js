
const { qase } = require("jest-qase-reporter/jest");
//ANCHOR:syntax
// describe("Example: id.test.js", () => {
 // // Please, change the Id from `1` to any case Id present in your project before uncommenting the test.
  test(qase(1, "A test with Qase Id"), () => {
    // Your test logic here
 // });
// });
//ANCHOR_END:syntax