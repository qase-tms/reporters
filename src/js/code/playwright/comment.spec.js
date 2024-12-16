import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

// ANCHOR: syntax
//test("A test case with qase.comment()", () => {
//
  qase.comment("This is a comment in a test");
//
//  expect(true).toBe(true);
//});
// ANCHOR_END: syntax
