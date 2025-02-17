const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

describe("Example: title.spec.js", function() {
  it("Test without this.title() method", function() {
    //// test logic here
  });

  // ANCHOR: syntax
  it("This won't appear in Qase", function() {
    this.title("This text will be the title of the test, in Qase");
    //// test logic here
  });
  // ANCHOR_END: syntax
});

/*
 *
 *     Q) What about the tests where the qase.title() method is not used?
 *     =>   Those test cases will have the "Title of this test" as the newly created case's title.
 *
 *
 *     Q) I'm running this test case, but it's not creating any test case in Qase.
 *        My test run is empty, what am I doing wrong?
 *
 *     =>   Go to your Qase Project's settings, switch to the Test runs tab.
 *          Under "Automated Testing" - Enable "Create test cases option" [https://i.imgur.com/PtZPrrY.png]
 *
 *
 *     Q) What happens if I change the title in `qase.title()` ?
 *     =>   Since, there's no link between the Qase test case and this test, changing the title will lead to
 *          a new case being created in your Project repository.
 *
 */
