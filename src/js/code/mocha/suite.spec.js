const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

describe("Example: suite.spec.js", function() {
  // ANCHOR: syntax
  it("Test with a defined suite", function() {
    this.suite("Example suite");
    //// test logic here
  });
  //
  //it("Test within multiple levels of suite", function() {
  //  this.suite(
  //    "Example suite\tChild Suite",
  //  );
  //  // test logic here
  //});
  // ANCHOR_END: syntax
});
