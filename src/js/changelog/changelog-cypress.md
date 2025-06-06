# changelog: cypress

> For the most up-to-date changelog, please check our [GitHub repository](https://github.com/qase-tms/qase-javascript/blob/main/qase-cypress/changelog.md).
 
## 2.2.5

Support Cucumber tests in Cypress with the `cypress-cucumber-preprocessor` plugin.

## 2.2.4

Fixed an issue with screenshots not being uploaded to Qase for failed tests.

## 2.2.3

Fixed an issue with the `@cypress/grep` plugin. When the `grepOmitFiltered` option is set to `true`, the reporter
encounters an error.

```log
Cannot set properties of undefined (setting 'title')
```

## 2.2.2

Fixed an issue with metadata. When specifying the path to the Cypress config located outside the root directory,
metadata was not added to the test case.


### 2.2.1

When specifying test names, QaseIDs are now excluded from the final test name.

```js
// The test name will be 'Example', not 'Example (Qase ID: 1)'
qase(1, it('Example', () => {
    expect(true).to.equal(true);
  })
);
```

## 2.2.0


Minor release of the Cypress reporter package

## 2.2.0-beta.3


Added the ability to add attachments to tests or steps:

- `qase.attach` - add an attachment to test or step

```ts
it('test', () => {
  qase.attach({ paths: '/path/to/file' });
  qase.step('Step 1', () => {
    cy.visit('https://example.com');
    qase.attach({ name: 'attachment.txt', content: 'Hello, world!', contentType: 'text/plain' });
  });
});
```

## 2.2.0-beta.2


Added the ability to add steps in tests:

- `qase.step` - add a step to the test

```ts
it('test', () => {
  qase.step('Step 1', () => {
    cy.visit('https://example.com');
  });
});
```

## 2.2.0-beta.1


Added the ability to specify a test metadata in tests:

- `qase.title` - set the test title
- `qase.fields` - set the test fields
- `qase.suite` - set the test suite
- `qase.comment` - set the test comment
- `qase.parameters` - set the test parameters
- `qase.groupParameters` - set the test group parameters
- `qase.ignore` - ignore the test in Qase

```ts
it('test', () => {
  qase.title('Title');
  qase.fields({ field: 'value' });
  qase.suite('Suite');
  qase.comment('Comment');
  qase.parameters({ param: 'value' });
  qase.groupParameters({ param: 'value' });
  qase.ignore();

  cy.visit('https://example.com');
});
```

## 2.1.0


Minor release of the Cypress reporter package

## 2.1.0-beta.3


Fixed an issue with the reporter completing the test run after each file with tests.

## 2.1.0-beta.1


- fixed an issue with the reporter completing the test run before all results are sent to Qase
- fixed an issue with the reporter not sending all results to Qase

Need to add the following to the `cypress.config.js` file:

```diff
...
  e2e: {
    setupNodeEvents(on, config) {
+      require('cypress-qase-reporter/plugin')(on, config);
    }
  }
...
```

## 2.0.3


Cypress doesn't finish the process after the last test.
The reporter will wait for all results to be sent to Qase and will not block the process after sending.

## 2.0.2


1. Cypress kills the process after the last tests.
   The reporter will wait for all results to be sent to Qase and will not block the process after sending.

2. The reporter will collect suites and add them to results.

## 2.0.1


The reporter would mark the test as blocked if the test was skipped in Cypress.
Now, the reporter will mark the test as skipped.

## 2.0.0


This is the first release in the 2.x series of the Cypress reporter.
It brings new and more flexible configs, uploading results in parallel with running tests,
and other powerful features.

This changelog entry will be updated soon.
For more information about the new features and a guide for migration from v1, refer to the
[reporter documentation](https://github.com/qase-tms/qase-javascript/tree/main/qase-cypress#readme)

## 2.0.0-beta.3

Fixed an issue with multiple test runs created when Cypress is running
multiple tests in parallel.

## 2.0.0-beta.2

First major beta release for the version 2 series of the Qase Cypress reporter.
