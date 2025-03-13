# Syntax

Tip: Click the _eyeball icon_ (<i class="fa fa-eye"></i>) in code blocks to toggle the visibility of the hidden lines.

> [**Click here**](https://github.com/cskmnrpt/qase-jest/tree/main/test/examples) to view Example tests for the following syntax.


If you do not use any Qase syntax, the reporter uses the title from the `fixture` and `test` functions to make the Suite and Test case titles while publishing results.


### Import Statement
---
Add the following statement at the beginning of your spec file, before any tests.

```javascript
const { qase } = require("jest-qase-reporter/jest");
```
Now, let's take a closer look at each of the Qase functions.

 
### Qase ID
---
To associate an ID to your Test Case use `qase.id` function. This function accepts a single integer representing the test's ID in Qase.

Only one Qase Id can be linked to a test. 

```javascript
{{#include ../code/jest/id.test.js:syntax}}
```

### Qase Title
--- 

The `qase.title()` method is used to set the title of a test case, both when creating a new test case from the result, and when updating the title of an existing test case - *if used with `qase.id()`.*

```javascript
{{#include ../code/jest/title.test.js:syntax}}
```

To update a Qase test case's title from code, you must enable "[Update test cases](https://help.qase.io/en/articles/5563702-test-runs#h_161810cf24)" in your project's run settings.

If you don’t explicitly set a title using the `qase.title` method, the title specified in the `test` definition will be used for new test cases. 

However, if the `qase.title` method is defined, it always takes precedence and overrides the title from the `test` definition


### Steps
--- 
The reporter uses the title from the `qase.step` function as the step title. By providing clear and descriptive step names, you make it easier to understand the test’s flow when reviewing the test case.

Additionally, these steps get their own result in the Qase Test run, offering a well-organized summary of the test flow. This helps quickly identify the cause of any failures.

```javascript
{{#include ../code/jest/steps.test.js:syntax}}
```

### Suite
---
You can use this method to nest the resulting test cases in a particular suite. There’s something to note here – suites, unlike test cases, are not identified uniquely by the Reporter.

Therefore, when defining an existing suite - the title of the suite is used for matching.

```javascript
{{#include ../code/jest/suite.test.js:syntax}}
```

### Fields
---
Currently, you can define `description`, `pre & post conditions`, and fields like `severity`, `priority`, `layer` with this method, allowing you to specify and maintain the context of the case, all directly from within your code. 

```javascript
{{#include ../code/jest/fields.test.js:syntax}}
```

### Parameters
---
Parameters are a great way to make your tests more dynamic, reusable, and data-driven. By defining parameters in this method, you can ensure only one test case with all the parameters is created in your Qase project, avoiding duplication.


```javascript
{{#include ../code/jest/params.test.js:syntax}}
```

### Comment
---
In addition to test.step(), this method can be used to provide any additional context to your test, it helps maintiain the code by clarifying the expected result of the test.

```javascript
{{#include ../code/jest/comment.test.js:syntax}}
```

### Attach
---
Before using `qase.attach` method. You need to set 
```json 
"uploadAttachments":true 
``` 
inside your `qase.config.json` Configuration file.

This method can help attach one, or more files to the test's result. You can also add the file's contents, directly from code. For example: 

```js
{{#include ../code/jest/attach.test.js:syntax}}
```

### Ignore
---
If this method is added, the reporter will exclude the test’s result from the report sent to Qase. While the test will still executed by testcafe, its result will not be considered by the reporter.

```js
{{#include ../code/jest/ignore.test.js:syntax}}
```