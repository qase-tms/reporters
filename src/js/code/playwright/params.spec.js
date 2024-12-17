import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter'; 

// ANCHOR: syntax
//const testCases = [
//  { browser: "Chromium", username: "@alice", password: "123" },
//  { browser: "Firefox", username: "@bob", password: "456" },
//  { browser: "Webkit", username: "@charlie", password: "789" },
//];
//
//testCases.forEach(({ browser, username, password,  }) => {
//  test(`Test login with ${browser}`, async () => {
//    qase.title("Verify if page loads on all browsers");
//
    qase.parameters({ Browser: browser });  // Single parameter
//  // test logic

//testCases.forEach(({ username, password }) => {
//  test(`Test login with ${username} using qase.groupParameters`, () => {
//    qase.title("Verify if user is able to login with their username.");

    qase.groupParameters({  // Group parameters
      Username: username,
      Password: password,
    });
//  // test logic
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

