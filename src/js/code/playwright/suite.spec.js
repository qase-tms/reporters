import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

// ANCHOR: syntax
//test("Test with a defined suite", () => {
//
  qase.suite("Suite defined with qase.suite()");
//
// /* Or, nest multiple levels of suites. `\t` is used for dividing each suite name. */
//
//  qase.suite("Application\tAuthentication\tLogin\tEdge_case");
//
//  expect(true).toBe(true);
//});
// ANCHOR_END: syntax
