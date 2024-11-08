# changelog: testcafe

> For the most up-to-date changelog, please check our [GitHub repository](https://github.com/qase-tms/qase-javascript/blob/main/qase-testcafe/changelog.md).

## 2.0.3


Support `ignore` metadata for test cases. If the test case has the `ignore` tag, the reporter will not send the result to the Qase
TMS.

```ts
const q = qase.ignore().create();
test.meta({ ...q })(
  'test',
  async (t) => {
    await t;
  },
);
```

## 2.0.2


Improved error collection. The error stack trace contains more useful debugging information: browser, code, etc.

## 2.0.1


Support group parameters for test cases. You can specify the group parameters in the test case using the following
format:

```ts
const q = qase.groupParameters({ 'param01': 'value01', 'param02': 'value02' }).create();
test.meta({ ...q })(
  'test',
  async (t) => {
    await t;
  },
);
```

## 2.0.0


This is the first release in the 2.x series of the TestCafe reporter.
It brings a new annotation syntax with test parametrization and field values,
new and more flexible configs, uploading results in parallel with running tests,
and other powerful features.

This changelog entry will be updated soon.
For more information about the new features and a guide for migration from v1, refer to the
[reporter documentation](https://github.com/qase-tms/qase-javascript/tree/main/qase-testcafe#readme)

## 2.0.0-beta.2


Add new syntax to annotate the following fields: `QaseID`, `QaseTitle`, `QaseFields`, `QaseParameters`:

```diff
+ import { qase } from 'testcafe-reporter-qase/qase';
 
- test.meta('CID', '2')('Test name', async t => {...});
+ const q = qase.id(2).title('Test name').fields('field1', 'field2').parameters('param1', 'param2').create();
+ test.meta(q)('Test name', async t => {...});
```

## 2.0.0-beta.1


First major beta release for the version 2 series of the Qase TestCafe reporter.
