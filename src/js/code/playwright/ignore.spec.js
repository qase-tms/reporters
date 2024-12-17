import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

// ANCHOR: syntax
//test("This test is executed using Playwright; however, it is NOT reported to Qase", () => {
  qase.ignore();
////  test logic here
// ANCHOR_END: syntax
