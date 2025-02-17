const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

describe("Example: id.spec.js", function() {
  // ANCHOR: syntax
  it(qase(1, "Test with Qase Id"), function() {
    //// test logic here
  });
  // ANCHOR_END: syntax
});
