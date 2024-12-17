# Syntax

> [**Click here**](https://github.com/cskmnrpt/qase-cypress/tree/main/tests/examples) to view Example tests for the following syntax.


If you do not use any Qase syntax, the reporter uses the title from the `describe` and `test` functions to make the Suite and Test case titles while publishing results.


## Example Spec file
---
```javascript
{{#include ../code/cypress/syntax.cy.js:syntax}}
```


### Import Statement
---
Add the following statement at the beginning of your spec file, before any tests.

```javascript
import { qase } from "cypress-qase-reporter/mocha";
```
Now, let's take a closer look at each of the Qase functions.


 
### Qase Id
---

You can link multiple Qase Ids to a single test. Here's an example:

```javascript
qase(1, it("A single Qase Id", () => {
  //  // Test logic here
    ..
    
qase([2,3,4], it("Link multiple Qase Ids", () => {
  //  // Test logic here
    ..
```

### Qase Title
--- 

The `qase.title()` method is used to set the title of a test case, both when creating a new test case from the result, and when updating the title of an existing test case - *if used with `qase.id()`.*

```javascript
{{#include ../code/cypress/title.cy.js:syntax}}
```

If you don’t explicitly set a title using the `qase.title` method, the title specified in the `test(..)` function will be used for new test cases. However, if the `qase.title` method is defined, it always takes precedence and overrides the title from the `test(..)` function.



### Steps
--- 

The reporter uses the title from the `qase.step` function as the step title. By providing clear and descriptive step names, you make it easier to understand the test’s flow when reviewing the test case.

Additionally, these steps get their own result in the Qase Test run, offering a well-organized summary of the test flow. This helps quickly identify the cause of any failures.

```javascript
{{#include ../code/cypress/steps.cy.js:syntax}}
```


### Fields
---

Currently, you can define `description`, `pre & post conditions`, and fields like `severity`, `priority`, `layer` with this method, allowing you to specify and maintain the context of the case, all directly from within your code. 

```javascript
{{#include ../code/cypress/fields.cy.js:syntax}}
```


### Suite 
---

You can use this method to nest the resulting test cases in a particular suite. There's something to note here – suites, unlike test cases, are not identified uniquely by the Reporter. 

Therefore, when defining an existing suite - the title of the suite is used for matching.

```js
{{#include ../code/cypress/suite.cy.js:syntax}}
```


### Parameters
---
Parameters are a great way to make your tests more dynamic, reusable, and data-driven. By defining parameters in this method, you can ensure only one test case with all the parameters is created in your Qase project, avoiding duplication.


```javascript
{{#include ../code/cypress/params.cy.js:syntax}}
```


### Comment
---
In addition to `test.step()`, this method can be used to provide any additional context to your test, it helps maintiain the code by clarifying the expected result of the test.

```js
{{#include ../code/cypress/comment.cy.js:syntax}}
```


### Attach
---
This method can help attach one, or more files to the test's result. You can also add the file's contents, directly from code. For example: 

```js
{{#include ../code/cypress/attach.cy.js:syntax}}
```


### Ignore
---
If this method is added, the reporter will exclude the test’s result from the report sent to Qase. While the test will still executed by Cypress, its result will not be considered by the reporter.

```js
{{#include ../code/cypress/ignore.cy.js:syntax}}
```
