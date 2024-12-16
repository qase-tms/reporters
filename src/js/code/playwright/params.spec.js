import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter'; 

// ANCHOR: syntax
//const testCases = [
//  { username: '@alice', browser: 'Chromium', result: 'Pass' },
//  { username: '@bob', browser: 'Firefox', result: 'Pass'  },
//  { username: '@charlie', browser: 'Firefox', result: 'Fail'  },
//];
//
//testCases.forEach(({ username, browser, result }) => {
//  test(`Test login with ${username}`, async () => {
//    qase.title("Verify if user is able to login.");
//
    qase.parameters({ 'Username': username });  // Single parameter

    qase.groupParameters({  // Group parameters
      'Browser': browser,
      'Expected result': result,
    });
//
//    expect(true).toBe(true);
//  });
//});
// ANCHOR_END: syntax

testCases.forEach(({ username, browser }) => {
  test(`Test login with ${username} using qase.groupParameters`, async () => {
    qase.title("Verify if user is able to login with grouped parameters.");

      /*
       * Here, instead of testing three users' login across all browsers, you can specify combinations that makes sense for you.
       */

    qase.groupParameters({
      'Browser': browser,
      'Username': username,
    });

    expect(true).toBe(true);
  });
});

