import { qase } from "cypress-qase-reporter/mocha";

describe("Example: comment.cy.js", () => {
// ANCHOR: syntax
//it("A test with qase.comment()", () => {
 //  /*
 //   * Please note, this comment is added to a Result, not to the Test case.
 //   */
   qase.comment("This comment is added to the result");
 //  // test logic here
 //});
// ANCHOR_END: syntax
});
