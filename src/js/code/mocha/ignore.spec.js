const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

describe("Example: ignore.spec.js", function() {
  // ANCHOR: syntax
  it("This test is executed using Mocha; however, it is NOT reported to Qase", function() {
    this.ignore();
    //// test logic here
  });
  // ANCHOR_END: syntax
});
