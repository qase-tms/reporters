# Syntax

Tip: Click the _eyeball icon_ (<i class="fa fa-eye"></i>) in code blocks to toggle the visibility of the hidden lines.

> [**Click here**](https://github.com/cskmnrpt/qase-cucumberjs/tree/main/features) to view Example tests for the following syntax.


### Qase ID
---


```gherkin
{{#include ../code/cucumberjs/QaseId.feature:syntax}}
```



### Qase Title
--- 

The `@QaseTitle` method is used to set the title of a test case, both when creating a new test case from the result, and when updating the title of an existing test case - *if used with `@QaseID`.*

```gherkin
{{#include ../code/cucumberjs/QaseTitle.feature:syntax}}
```

To update a Qase test case's title from code, you must enable "[Update test cases](https://help.qase.io/en/articles/5563702-test-runs#h_161810cf24)" in your project's run settings.

If you don’t explicitly set a title using the `@QaseTitle` method, the title specified in the `Scenario` function will be used for new test cases. 

However, if the `@QaseTitle` method is defined, it always takes precedence and overrides the title from the `Scneario` description.



### Fields
---

Currently, you can define `description`, `pre & post conditions`, and other fields like `severity`, `priority`, `layer` with this method, allowing you to specify and maintain the context of the case, all directly from within your code. 

```gherkin
{{#include ../code/cucumberjs/QaseFields.feature:syntax}}
```



### Attach
---
This method can help attach one, or more files to the test's result. You can also add the file's contents, directly from code. For example: 

```gherkin
{{#include ../code/cucumberjs/Attachment.feature:syntax}}
```


### Ignore
---
If this method is added, the reporter will exclude the test’s result from the report sent to Qase. While the test will still executed by CucumberJS, its result will not be considered by the reporter.

```js
{{#include ../code/cucumberjs/QaseIgnore.feature:syntax}}
```
