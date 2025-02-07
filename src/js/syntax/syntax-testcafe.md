# Syntax

Tip: Click the _eyeball icon_ (<i class="fa fa-eye"></i>) in code blocks to toggle the visibility of the hidden lines.

> [**Click here**](https://github.com/Karan710/qase-testcafe/tree/main/tests) to view Example tests for the following syntax.


If you do not use any Qase syntax, the reporter uses the title from the `fixture` and `test` functions to make the Suite and Test case titles while publishing results.


## Example Spec file
---
```javascript
{{#include ../code/testcafe/example.spec.js}}
```


### Import Statement
---
Add the following statement at the beginning of your spec file, before any tests.

```javascript
import { qase } from 'testcafe-reporter-qase/qase';
```
Now, let's take a closer look at each of the Qase functions.


 
### Qase ID
---

To associate an ID to your Test Case use `qase.id` function. This function accepts a single integer representing the test's ID in Qase.

Only one Qase Id can be linked to a test. 

```javascript
{{#include ../code/testcafe/id.spec.js:syntax}}
```


### Qase Title
--- 

The `qase.title()` method is used to set the title of a test case, both when creating a new test case from the result, and when updating the title of an existing test case - *if used with `qase.id()`.*

```javascript
{{#include ../code/testcafe/title.spec.js:syntax}}
```

If you don’t explicitly set a title using the `qase.title` method, the title specified in the `test` definition will be used for new test cases. However, if the `qase.title` method is defined, it always takes precedence and overrides the title from the `test` definition



### Steps
--- 

The reporter uses the title from the `qase.step` function as the step title. By providing clear and descriptive step names, you make it easier to understand the test’s flow when reviewing the test case.

Additionally, these steps get their own result in the Qase Test run, offering a well-organized summary of the test flow. This helps quickly identify the cause of any failures.

```javascript
{{#include ../code/testcafe/steps.spec.js:syntax}}
```


### Fields
---

Currently, you can define `description`, `pre & post conditions`, and fields like `severity`, `priority`, `layer` with this method, allowing you to specify and maintain the context of the case, all directly from within your code. 

```javascript
{{#include ../code/testcafe/fields.spec.js:syntax}}
```

### Parameters
---
Parameters are a great way to make your tests more dynamic, reusable, and data-driven. By defining parameters in this method, you can ensure only one test case with all the parameters is created in your Qase project, avoiding duplication.


```javascript
{{#include ../code/testcafe/params.spec.js:syntax}}
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
{{#include ../code/testcafe/attach.spec.js:syntax}}
```


### Ignore
---
If this method is added, the reporter will exclude the test’s result from the report sent to Qase. While the test will still executed by testcafe, its result will not be considered by the reporter.

```js
{{#include ../code/testcafe/ignore.spec.js:syntax}}
```
