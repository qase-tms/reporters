# Syntax

Tip: Click the _eyeball icon_ (<i class="fa fa-eye"></i>) in code blocks to toggle the visibility of the hidden lines.

> [**Click here**](https://github.com/cskmnrpt/qase-mocha/tree/main/mocha/e2e/tests/examples) to view Example tests for the following syntax.


If you do not use any Qase syntax, the reporter uses the title from the `describe` and `it` functions to make the Suite and Test case titles while publishing results.


### Import Statement
---
Add the following statement at the beginning of your spec file, before any tests.

```js
const { qase } = require("mocha-qase-reporter/mocha");
```
Now, let's take a closer look at each of the Qase functions.


 
### Qase Id
---

You can link multiple Qase Ids to a single test. Here's an example:

```js
{{#include ../code/mocha/id.spec.js:syntax}}
```

### Qase Title
--- 

The `this.title()` method is used to set the title of a test case, both when creating a new test case from the result, and when updating the title of an existing test case - *if used with Qase Id.*

```js
{{#include ../code/mocha/title.spec.js:syntax}}
```

To update a Qase test case's title from code, you must enable "[Update test cases](https://help.qase.io/en/articles/5563702-test-runs#h_161810cf24)" in your project's run settings.

If you don’t explicitly set a title using the `this.title()` method, the title specified in the `it(..)` function will be sent to Qase.

However, if the `this.title` method is defined, it always takes precedence and overrides the title from the `test(..)` function.



### Steps
--- 

The reporter uses the title from the `this.step` function as the step title. By providing clear and descriptive step names, you make it easier to understand the test’s flow when reviewing the test case.

Additionally, these steps get their own result in the Qase Test run, offering a well-organized summary of the test flow. This helps quickly identify the cause of any failures.

```js
{{#include ../code/mocha/steps.spec.js:syntax}}
```


### Fields
---

Currently, you can define `description`, `pre & post conditions`, and fields like `severity`, `priority`, `layer` with this method, allowing you to specify and maintain the context of the case, all directly from within your code. 

```js
{{#include ../code/mocha/fields.spec.js:syntax}}
```


### Suite 
---

You can use this method to nest the resulting test cases in a particular suite. There's something to note here – suites, unlike test cases, are not identified uniquely by the Reporter. 

Therefore, when defining an existing suite - the title of the suite is used for matching.

```js
{{#include ../code/mocha/suite.spec.js:syntax}}
```


### Parameters
---
Parameters are a great way to make your tests more dynamic, reusable, and data-driven. By defining parameters in this method, you can ensure only one test case with all the parameters is created in your Qase project, avoiding duplication.


```js
{{#include ../code/mocha/params.spec.js:syntax}}
```


### Comment
---
In addition to `this.step()`, this method can be used to provide any additional context to your test, it helps maintiain the code by clarifying the expected result of the test.

```js
{{#include ../code/mocha/comment.spec.js:syntax}}
```


### Attach
---
This method can help attach one, or more files to the test's result. You can also add the file's contents, directly from code. For example: 

```js
{{#include ../code/mocha/attach.spec.js:syntax}}
```


### Ignore
---
If this method is added, the reporter will exclude the test’s result from the report sent to Qase. While the test will still executed by mocha, its result will not be considered by the reporter.

```js
{{#include ../code/mocha/ignore.spec.js:syntax}}
```
