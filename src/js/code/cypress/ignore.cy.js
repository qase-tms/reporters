import { qase } from "cypress-qase-reporter/mocha";

describe("Example: ignore.spec.js", () => {
// ANCHOR: syntax
//it("This test is executed by Cypress, however, it is NOT reported to Qase", () => {
  qase.ignore();
//  // test logic here
//});
// ANCHOR_END: syntax
});
