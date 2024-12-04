# changelog

> For the most up-to-date changelog, please check our [GitHub repository](https://github.com/qase-tms/qase-javascript/blob/main/qase-cucumberjs/changelog.md).
 

## 2.0.2

Support attachments in the test results.

```js
const { Given, Then } = require('cucumber');

Given('I have a step with attachment', async function () {
  await this.attach('Hello, world!', 'text/plain');
});

Then('I have a step with attachment', async function () {
  await this.attach('Hello, world!', 'text/plain');
});
```

## 2.0.2


- Support `QaseIgnore` tag. If the test case has the `QaseIgnore` tag, the reporter will not send the result to the Qase
  TMS.

    ```cucumber
    @QaseIgnore
    Scenario: simple test
    ```

- Improved error handling.

## 2.0.0


This is the first release in the 2.x series of the Cucumber JS reporter.
It brings a new annotation syntax with field values,
new and more flexible configs, uploading results in parallel with running tests,
and other powerful features.

This changelog entry will be updated soon.
For more information about the new features and a guide for migration from v1, refer to the
[reporter documentation](https://github.com/qase-tms/qase-javascript/tree/main/qase-cucumberjs#readme)

## 2.0.0-beta.3


Added support new Qase tags.

```diff
-  @Q-1
+  @QaseID=2
+  @QaseTitle=Scenario_with_Qase_title_tag
+  @QaseFields={"description":"Description","severity":"high"}
  Scenario: simple test
```

QaseID - is a unique identifier of the test case in the Qase TMS.
QaseTitle - is a title of the test case in the Qase TMS.
QaseFields - is a JSON object with additional fields for the test case in the Qase TMS.

## 2.0.0-beta.2


Added support gherkin steps.
Before this version, the reporter was not able to parse the steps from the feature files.
Now, the reporter can parse the steps and send them to the Qase TMS.

## 2.0.0-beta.1


First major beta release for the version 2 series of the Qase Cypress reporter.
