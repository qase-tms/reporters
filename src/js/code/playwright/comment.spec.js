import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

// ANCHOR: syntax
//test("A test case with qase.comment()", () => {
  //  /*
  //   * Please note, this comment is added to a Result, not to the Test case.
  //   */
  qase.comment("This comment is added to the result");
//  // test logic here
//});
// ANCHOR_END: syntax
