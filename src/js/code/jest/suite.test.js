const { qase } = require("jest-qase-reporter/jest");
// ANCHOR: syntax
//it("Test with a defined suite", () => {
   qase.suite("Suite defined with qase.suite()");
 //  /*
 //   *  Or, nest multiple levels of suites. 
 //   *  `\t` is used for dividing each suite name.
 //   */
 //  qase.suite("Suite defined with qase.suite()\tAuthentication\tLogin");
 //
 //  expect(true).to.equal(true);
 //});
// ANCHOR_END: syntax

