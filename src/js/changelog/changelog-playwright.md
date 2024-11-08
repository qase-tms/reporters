# changelog: playwright
> For the most up-to-date changelog, please check our [GitHub repository](https://github.com/qase-tms/qase-javascript/blob/main/qase-playwright/changelog.md).

## 2.0.16

Improve excluding default steps, like `Worker Cleanup`, `Before Hook`, and `After Hook`.

## 2.0.15


Exclude `Worker Cleanup` step if it doesn't have children steps.

## 2.0.14


Support specifying the test case ID in the `annotation`.

```ts
test('test',
  {
    annotation: { type: 'QaseID', description: '1' },
  },
  async ({ page }) => {
    await page.goto('https://example.com');
  });
```

## 2.0.13


Revert the `qase.id()` syntax to `qase()` for the Qase ID.
The `qase.id()` syntax is still supported, but the `qase()` syntax is more concise and easier to use.

```ts
test(qase(42, 'test'), async ({ page }) => {
  await page.goto('https://example.com');
});
```

We decided to return the old syntax because in some situations the new syntax does not work, since the test does not
run.

## 2.0.12


Exclude `Before Hook` and `After Hook` if they don't have children steps.

## 2.0.11


Support group parameters for test cases. You can specify the group parameters in the test case using the following
format:

```ts
  test('test', () => {
  qase.groupParameters({ 'param01': 'value01', 'param02': 'value02' });
  expect(true).toBe(true);
});
```

## 2.0.10


Improved stack trace handling when an error occurs.
Now, records related to the reporter are not added to the stack trace.

## 2.0.9


Fixed the problem when tests have the same name and different QaseIDs.
They were uploaded into the Qase with an incorrect QaseID.

## 2.0.7


Returned the ability to add the QaseID to the test name.
This allows using the standard playwright mechanism to filter the tests being run.

## 2.0.6


Improve the collecting information about failed tests.
Now, the reporter will collect the stack trace and the error message from all errors for failed tests.

## 2.0.5


The log message about the `qase(id, 'title')` annotation syntax got improved.
Earlier it was saying that this syntax is deprecated, which could be understood as that it's not working anymore,
or will be removed any time.
In fact, it's still working and will be supported further on.
However, there's a more powerful and flexible syntax which we propose to try in new tests.

The updated log message will, hopefully, explain it better:

> Some tests are using qase(id, 'Title') syntax.
> Consider using the new syntax: qase.id().title() in the test body. See the docs for reference:
> https://github.com/qase-tms/qase-javascript/tree/main/qase-playwright#readme

## 2.0.4


Added new annotation `qase.comment()`.
Tests marked with it will be reported with the specified comment in the Qase.

```js
test('test', async ({ page }) => {
  qase.comment("Custom comment");
  await page.goto('https://example.com');
});
```

## 2.0.3


Added new annotation `qase.suite()`.
Tests marked with it will be reported to the specified suite in the Qase.

If you don't specify the suite name, the reporter will take a suites from the test file path.
If you use the root suite, the reporter will take the root suite as the first level of the suite and your value of the
`qase.suite()` as the second level.

```js
test('test', async ({ page }) => {
  qase.suite("Custom suite");
  await page.goto('https://example.com');
});
```

## 2.0.2


Added new annotation `qase.ignore()`.
Tests marked with it will run as usual but won't appear in the Qase report.

```js
test('test', async ({ page }) => {
  qase.ignore();
  await page.goto('https://example.com');
});
```

## 2.0.1


Fixed an issue with using the `qase.attach()` method to add attachments with a file path.
The reporter didn't add such attachments to the test.

## 2.0.0


This is the first release in the 2.x series of the Playwright reporter.
It brings a new annotation syntax with test parametrization and field values,
new and more flexible configs, uploading results in parallel with running tests,
and other powerful features.

This changelog entry will be updated soon.
For more information about the new features and a guide for migration from v1, refer to the
[reporter documentation](https://github.com/qase-tms/qase-javascript/tree/main/qase-playwright#readme)

## 2.0.0-beta.14


Fixed the issue with attachments that the Playwright would create if the test failed.
We have not uploaded these attachments before. This problem has now been fixed.

## 2.0.0-beta.13


Fixed the issue with the `qase.parameters` annotation if you use not string values for parameters.

```log
[ERROR] qase: Unable to add the result to the upstream reporter:
Message: Data is invalid.
 results.0.param.test_case: The param.test_case must be a string.

Error: Request failed with status code 400
```

Right now, the reporter will convert all parameters to strings before sending them to the Qase API.

## 2.0.0-beta.11


- Using the `qase` annotation in a chain

```js
test('Ultimate Question of Life, The Universe, and Everything', async ({ page }) => {
  qase.id(42)
    .title('Ultimate Question of Life, The Universe, and Everything')
    .fields({ severity: high, priority: medium })
    .attach({ paths: '/path/to/file' });
...
})
```

## 2.0.0-beta.10


- Reporting no longer fails when a test has failed but no stacktrace was collected.
  ("TypeError: Cannot read properties of undefined (reading 'toString')").

## 2.0.0-beta.9


### Collect test suite information

Collect the following information as the test's suite:

- path to the file which contains the test;
- value of the `test.describe()` declaration, if it exists.

The resulting test suite will be added to the test metadata.
If Qase workspace is configured to update test cases from reported
tests results, the newly created cases will be structured by their
suites, derived from file path and `test.describe()`.

## 2.0.0-beta.8


Fix the problem with dependencies, introduced in `2.0.0-beta.7`

## 2.0.0-beta.7


Previously, we logged a message about the use of an outdated annotation immediately when running the test.
Now we will log the message after all tests are completed. Like this:

```log
qase: qase(caseId) is deprecated. Use qase.id() and qase.title() inside the test body
The following tests are using the old annotation:
at /Users/gda/Documents/github/qase-javascript/examples/playwright/test/arith.test.js:12:8
at /Users/gda/Documents/github/qase-javascript/examples/playwright/test/arith.test.js:16:7
at /Users/gda/Documents/github/qase-javascript/examples/playwright/test/arith.test.js:7:7

```

## 2.0.0-beta.6


Capture `stdout` and `stderr` logs as attachments.
To enable this feature, set environment variable `QASE_CAPTURE_LOGS=true` or
add `captureLogs: true` to the reporter configuration:

```diff
[
  'playwright-qase-reporter',
  {
    mode: 'testops', 
+   captureLogs: true,
    ...
  },
];
```

## 2.0.0-beta.5


Upload test attachments to Qase:

```js
test('test', async ({ page }) => {
  // upload files by path
  qase.attach({ paths: '/path/to/file' });
  // list multiple files at once
  qase.attach({ paths: ['/path/to/file', '/path/to/another/file'] });
  // upload contents directly from your code
  qase.attach({ name: 'attachment.txt', content: 'Hello, world!', contentType: 'text/plain' });
  await page.goto('https://example.com');
});
```

## 2.0.0-beta.4


Annotate parameterized tests to see the complete data in the Qase.io test report:

```js
const people = ['Alice', 'Bob'];
for (const name of people) {
  test(`testing with ${name}`, async () => {
    qase.id(1)
    qase.parameters({ 'name': name });
    // ...
  });
}

```

## 2.0.0-beta.3


* Change module exports for simpler importing.

  New syntax:

  ```js
  import { qase } from 'playwright-qase-reporter';
  ```

  instead of:
  ```js
  import { qase } from 'playwright-qase-reporter/playwright';
  ```

* Update the readme with examples of new imports and annotations.

## 2.0.0-beta.2

## Overview

Qase reporter for the Playwright test framework.

This is a beta channel release.
To try the new features, install it with:

```bash
npm install playwright-qase-reporter@beta
```

To switch back to the stable releases, run:

```bash
npm install playwright-qase-reporter@latest
```


### New syntax for annotating tests

This release brings a major syntax change for specifying more test parameters.

Old syntax allowed only test ID and title, and wasn't improving code readability:

```js
test(qase(42, 'Ultimate Question of Life, The Universe, and Everything'), async ({ page }) => {
...
})
```

New syntax allows for adding information on separate lines, keeping the code readable:

```js
test('Ultimate Question of Life, The Universe, and Everything', async ({ page }) => {
  qase.id(42);
  qase.fields({ severity: high, priority: medium });
  qase.attach({ paths: '/path/to/file' });
...
})
```
