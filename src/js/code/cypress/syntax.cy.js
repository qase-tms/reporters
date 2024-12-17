import { qase } from "cypress-qase-reporter/mocha";

// ANCHOR: syntax
describe("Demonstrates all Qase methods", () => {

  qase(1, it("This is the test name", () => {
    qase.title("This overrides the test name");
    qase.suite("Suite name");
    qase.fields({ priority: "high", severity: "critical" });
    qase.attach({ paths: "./path/to/attachment.txt" });
    qase.comment("This comment appears in the 'Actual Result' field.");
    qase.ignore(); // doesn't report his result to Qase.
    qase.parameters({ Browser: "Chromium" });
    qase.groupParameters({ Username: "@alice", Password: "123" });
    qase.step("Step 1: Open the site", () => // step logic );
  // // test logic
  });
});
// ANCHOR_END: syntax
