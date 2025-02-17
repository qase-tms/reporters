# Syntax

Tip: Click the _eyeball icon_ (<i class="fa fa-eye"></i>) in code blocks to toggle the visibility of the hidden lines.


> [**Click here**](https://github.com/cskmnrpt/qase-playwright/tree/main/tests/examples) to view Example tests for the following syntax.


If you do not use any Qase syntax, the reporter uses the title from the `describe` and `test` functions to make the Suite and Test case titles while publishing results.


## Example Spec file
---
```javascript
{{#include ../code/playwright/syntax.spec.js:syntax}}
```


### Import Statement
---
Add the following statement at the beginning of your spec file, before any tests.

```javascript
import { qase } from 'playwright-qase-reporter';
```
Now, let's take a closer look at each of the Qase functions.


 
### Qase ID
---

Qase IDs can be defined using two different methods. It is best to select one method and consistently use it throughout your tests. The first method is recommended.

Only one Qase Id can be linked to a test. 

**Inline with the `test` Function**: 

```javascript
test(qase(<id>, 'A simple test'), () => {
    ..
```

**Inside the `test` Body**: 

```javascript
test('A simple test', () => {
    qase.id(<id>);
    // Test logic here
});
```

**In the test's annotations**:

```js
test('A simple test',
{
  annotation: { type: 'QaseID', description: '<id>' },
},
  async () => {
    // Test logic here
});
```


### Qase Title
--- 

The `qase.title()` method is used to set the title of a test case, both when creating a new test case from the result, and when updating the title of an existing test case - *if used with `qase.id()`.*

```javascript
{{#include ../code/playwright/title.spec.js:syntax}}
```

To update a Qase test case's title from code, you must enable "[Update test cases](https://help.qase.io/en/articles/5563702-test-runs#h_161810cf24)" in your project's run settings.

If you don’t explicitly set a title using the `qase.title` method, the title specified in the `test(..)` function will be used for new test cases. 

However, if the `qase.title` method is defined, it always takes precedence and overrides the title from the `test(..)` function.



### Steps
--- 

The reporter uses the title from the `test.step` function as the step title. By providing clear and descriptive step names, you make it easier to understand the test’s flow when reviewing the test case.

Additionally, these steps get their own result in the Qase Test run, offering a well-organized summary of the test flow. This helps quickly identify the cause of any failures.

```javascript
{{#include ../code/playwright/steps.spec.js:syntax}}
```


### Fields
---

Currently, you can define `description`, `pre & post conditions`, and fields like `severity`, `priority`, `layer` with this method, allowing you to specify and maintain the context of the case, all directly from within your code. 

```javascript
{{#include ../code/playwright/chain.spec.js:syntax}}
```


### Suite 
---

You can use this method to nest the resulting test cases in a particular suite. There's something to note here – suites, unlike test cases, are not identified uniquely by the Reporter. Therefore, when defining an existing suite - the title of the suite is used for matching.

```js
{{#include ../code/playwright/suite.spec.js:syntax}}
```


### Parameters
---
Parameters are a great way to make your tests more dynamic, reusable, and data-driven. By defining parameters in this method, you can ensure only one test case with all the parameters is created in your Qase project, avoiding duplication.


```javascript
{{#include ../code/playwright/params.spec.js:syntax}}
```


### Comment
---
In addition to `test.step()`, this method can be used to provide any additional context to your test, it helps maintiain the code by clarifying the expected result of the test.

```js
{{#include ../code/playwright/comment.spec.js:syntax}}
```


### Attach
---
This method can help attach one, or more files to the test's result. You can also add the file's contents, directly from code. For example: 

```js
{{#include ../code/playwright/attach.spec.js:syntax}}
```


### Ignore
---
If this method is added, the reporter will exclude the test’s result from the report sent to Qase. While the test will still executed by Playwright, its result will not be reported to Qase.

```js
{{#include ../code/playwright/ignore.spec.js:syntax}}
```
