# Syntax

Tip: Click the _eyeball icon_ (<i class="fa fa-eye"></i>) in code blocks to toggle the visibility of the hidden lines.

> [**Click here**](https://github.com/cskmnrpt/qase-cucumber/tree/cucumber7/src/test/java/com/example/resources/features) to view Example tests for the following syntax.

Now, let's take a closer look at each of the Qase functions.


### Qase ID
---
To associate a Test Case ID with test results, use the '@QaseId' tag in your .feature file

```feature
{{#include ../code/cucumber7/features/QaseId.feature:syntax}}
```

### Qase Title
--- 

To set a title for a test case in Qase, use the @QaseTitle tag. This title will either create a new test case with the given title or update an existing case title.

```feature
{{#include ../code/cucumber7/features/Title.feature:syntax}}
```

To update a Qase test case's title from code, you must enable "[Update test cases](https://help.qase.io/en/articles/5563702-test-runs#h_161810cf24)" in your project's run settings.

If the title is not explicitly set, the scenario title from .feature file will be used.


### Suite
---

You can group your test cases under a specific Suite using the `QaseSuite` tag in your feature file.

```feature
{{#include ../code/cucumber7/features/Suite.feature:syntax}}
```
This helps you organize your test cases in Qase under relevant suites.


### Fields
---
Currently, you can define `description`, `pre & post conditions`, and fields like `severity`, `priority`, `layer` with this method, allowing you to specify and maintain the context of the case, all directly from within your feature file. 

```feature
{{#include ../code/cucumber7/features/Fields.feature:syntax}}
```

### Ignore
---
If this tag is added, the reporter will exclude the test’s result from the report sent to Qase. While the test will still executed, its result will not be considered by the reporter.

```feature
{{#include ../code/cucumber7/features/Ignore.feature:syntax}}
```

### Attach
---
The attach logic is implemented in java file located at [**Stepdefinition**](https://github.com/cskmnrpt/qase-cucumber/tree/cucumber7/src/test/java/com/example/stepdefinitions) directory, not directly inside the .feature file.
The feature file only contains the scenario steps, while the actual attachment is handled programmatically in the Java step definitions.

```feature
{{#include ../code/cucumber7/features/Attach.feature:syntax}}
```

### Comment
The comment logic is added in java file located at [**Stepdefinition**](https://github.com/cskmnrpt/qase-cucumber/tree/cucumber7/src/test/java/com/example/stepdefinitions) directory.
The .feature file only contains the scenario flow, while the comment is programmatically set inside step definitions.

```feature
{{#include ../code/cucumber7/features/comment.feature:syntax}}
```