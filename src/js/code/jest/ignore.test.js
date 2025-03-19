const { qase } = require("jest-qase-reporter/jest");
//ANCHOR:syntax
//describe("Example: ignore.test.js", () => {
  //test("This test is executed using Jest; however, it is NOT reported to Qase", () => {
    qase.ignore();
  //// test logic here    
//  });
//});
//ANCHOR_END:syntax
