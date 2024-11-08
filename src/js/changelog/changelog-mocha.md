# changelog: mocha

> For the most up-to-date changelog, please check our [GitHub repository](https://github.com/qase-tms/qase-javascript/blob/main/qase-mocha/changelog.md).

## 1.0.0-beta.4


Fixed the issue with async tests not being reported correctly.

## 1.0.0-beta.3


Support group parameters for test cases. You can specify the group parameters in the test case using the following format: 

```ts
  it('test', () => {
    this.groupParameters({ param1: 'value1', param2: 'value2' });
    expect(true).to.equal(true);
  });
```

## 1.0.0-beta.2


Support parallel execution of tests.

## 1.0.0-beta.1


First major beta release for the version 1 series of the Qase Mocha reporter.
