const { qase } = require("jest-qase-reporter/jest");
import { markdownContent } from "./markdownContent";

/*
// ANCHOR: syntax
// it("Demonstrates all Qase methods", () => {
   qase.fields({
     priority: "high",
     severity: "critical",
     layer: "e2e",
     description: "Example description",
     preconditions: "Example precondition",
     postconditions: "Example postcondition",
 //  });
//   //  Test logic here
 //});
// ANCHOR_END: syntax
*/

describe("Test cases with field: Priority", () => {
  /*
   * Meta data such as Priority, Severity, Layer fields, Description, and  pre-conditions can be updated from code.
   * This enables you to manage test cases from code directly.
   */

  it("Priority = low", () => {
    qase.fields({ priority: "low" });
    expect(true).to.equal(true);
  });

  it("Priority = medium", () => {
    qase.fields({ priority: "medium" });
    expect(true).to.equal(true);
  });

  it("Priority = high", () => {
    qase.fields({ priority: "high" });
    expect(true).to.equal(true);
  });
});

describe("Test cases with field: Severity", () => {
  it("Severity = trivial", () => {
    qase.fields({ severity: "trivial" });
    expect(true).to.equal(true);
  });

  it("Severity = minor", () => {
    qase.fields({ severity: "minor" });
    expect(true).to.equal(true);
  });

  it("Severity = normal", () => {
    qase.fields({ severity: "normal" });
    expect(true).to.equal(true);
  });

  it("Severity = major", () => {
    qase.fields({ severity: "major" });
    expect(true).to.equal(true);
  });

  it("Severity = critical", () => {
    qase.fields({ severity: "critical" });
    expect(true).to.equal(true);
  });

  it("Severity = blocker", () => {
    qase.fields({ severity: "blocker" });
    expect(true).to.equal(true);
  });
});

describe("Test cases with field: Layer", () => {
  it("Layer = e2e", () => {
    qase.fields({ layer: "e2e" });
    expect(true).to.equal(true);
  });

  it("Layer = api", () => {
    qase.fields({ layer: "api" });
    expect(true).to.equal(true);
  });

  it("Layer = unit", () => {
    qase.fields({ layer: "unit" });
    expect(true).to.equal(true);
  });
});

describe("Test cases with Description, Pre & Post Conditions", () => {
  it("Description with Markdown Support", () => {
    qase.fields({ description: markdownContent });
    expect(true).to.equal(true);
  });

  it("Preconditions with Markdown Support", () => {
    qase.fields({ preconditions: markdownContent });
    expect(true).to.equal(true);
  });

  it("Postconditions with Markdown Support", () => {
    qase.fields({ postconditions: markdownContent });
    expect(true).to.equal(true);
  });
});
