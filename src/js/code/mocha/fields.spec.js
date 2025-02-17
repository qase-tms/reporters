const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");
const markdownContent = require("./markdownContent");

// ANCHOR: syntax
it("Test case with fields", function() {
  this.fields({
    priority: "high",
    //severity: "critical",
    //layer: "api",
    description: "Write your description here..",
    //preconditions: "Write your preconditions here..",
    //postconditions: "Write your postconditions here..",
  });
  //// test logic here
});
// ANCHOR_END: syntax

describe("Example: fields.spec.js Test cases with field: Priority", function() {
  it("Priority = low", function() {
    this.fields({ priority: "low" });
    assert.strictEqual(true, true);
  });

  it("Priority = medium", function() {
    this.fields({ priority: "medium" });
    assert.strictEqual(true, true);
  });

  it("Priority = high", function() {
    this.fields({ priority: "high" });
    assert.strictEqual(true, true);
  });
});

describe("Example: fields.spec.js Test cases with field: Severity", function() {
  it("Severity = trivial", function() {
    this.fields({ severity: "trivial" });
    assert.strictEqual(true, true);
  });

  it("Severity = minor", function() {
    this.fields({ severity: "minor" });
    assert.strictEqual(true, true);
  });

  it("Severity = normal", function() {
    this.fields({ severity: "normal" });
    assert.strictEqual(true, true);
  });

  it("Severity = major", function() {
    this.fields({ severity: "major" });
    assert.strictEqual(true, true);
  });

  it("Severity = critical", function() {
    this.fields({ severity: "critical" });
    assert.strictEqual(true, true);
  });

  it("Severity = blocker", function() {
    this.fields({ severity: "blocker" });
    assert.strictEqual(true, true);
  });
});

describe("Example: fields.spec.js Test cases with field: Layer", function() {
  it("Layer = e2e", function() {
    this.fields({ layer: "e2e" });
    assert.strictEqual(true, true);
  });

  it("Layer = api", function() {
    this.fields({ layer: "api" });
    assert.strictEqual(true, true);
  });

  it("Layer = unit", function() {
    this.fields({ layer: "unit" });
    assert.strictEqual(true, true);
  });
});

describe("Example: fields.spec.js Test cases with Description, Pre & Post Conditions", function() {
  it("Description with Markdown Support", function() {
    this.fields({ description: markdownContent });
    assert.strictEqual(true, true);
  });

  it("Preconditions with Markdown Support", function() {
    this.fields({ preconditions: markdownContent });
    assert.strictEqual(true, true);
  });

  it("Postconditions with Markdown Support", function() {
    this.fields({ postconditions: markdownContent });
    assert.strictEqual(true, true);
  });
});

/*
  it('Example for custom field', function() {
    this.fields({ custom_field: 'value' });
    assert.strictEqual(1, 1);
  });
*/
