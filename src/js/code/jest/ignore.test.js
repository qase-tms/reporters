const { qase } = require("jest-qase-reporter/jest");

describe("Example: ignore.test.js", () => {
// ANCHOR: syntax
//it("This test is executed by Jest, however, it is NOT reported to Qase", () => {
  qase.ignore();
//  // test logic here
//});
// ANCHOR_END: syntax
});
