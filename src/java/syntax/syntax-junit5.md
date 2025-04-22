# Syntax

Tip: Click the _eyeball icon_ (<i class="fa fa-eye"></i>) in code blocks to toggle the visibility of the hidden lines.

> [**Click here**](https://github.com/cskmnrpt/qase-junit/tree/junit5/src/test/java/com/example) to view Example tests for the following syntax.

Now, let's take a closer look at each of the Qase functions.


### Qase ID
---
To associate a test case in Qase with a test, use the @QaseId annotation. This helps link your automated test results to Qase test cases.
```java
{{#include ../code/junit5/QaseIdTest.java:syntax}}
```

### Qase Title
--- 

To set a title for a test case in Qase, use the @QaseTitle tag. This title will either create a new test case with the given title or update an existing case title.

```java
{{#include ../code/junit5/TitleTest.java:syntax}}
```

If the title is not explicitly set, the scenario title from .feature file will be used.

To update a Qase test case's title from code, you must enable "[Update test cases](https://help.qase.io/en/articles/5563702-test-runs#h_161810cf24)" in your project's run settings.




### Suite
---

You can group your test cases under a specific Suite using the `QaseSuite` tag in your feature file.

```java
{{#include ../code/junit5/SuiteTest.java:syntax}}
```
This helps you organize your test cases in Qase under relevant suites.

### Steps
---

You can describe individual test steps using the @Step annotation. These steps will be shown in your Qase test run results, helping reviewers understand what actions were taken and where a failure might have occurred. This improves both readability and traceability of your tests inside Qase.
```java
{{#include ../code/junit5/StepsTest.java:syntax}}
```
Each method annotated with @Step becomes a clearly defined step in the test run results, making it easier to follow the test flow and pinpoint issues.

### Params
---
To run the same test method with multiple sets of input data, use the @ParameterizedTest annotation. This is helpful when validating a test against various inputs without writing separate methods for each. 

```java
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```
### Fields
---
Currently, you can define `description`, `pre & post conditions`, and fields like `severity`, `priority`, `layer` with this method, allowing you to specify and maintain the context of the case, all directly from within your feature file. 

```java
{{#include ../code/junit5/FieldsTest.java:syntax}}
```

### Ignore
---
If this tag is added, the reporter will exclude the test’s result from the report sent to Qase. While the test will still executed, its result will not be considered by the reporter.

```java
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

### Attach
---
You can attach one or more files to a test result using the Qase.attach() method. This is useful when you want to include evidence like screenshots, logs, or text files with your test execution results in Qase.

```java
{{#include ../code/junit5/AttachTest.java:syntax}}
```

### Comment

Use Qase.comment() to add meaningful commentary to the test result. This is especially helpful for describing actual outcomes, adding debug info, or clarifying why a result may differ from expectations.

```java
{{#include ../code/junit5/CommentTest.java:syntax}}
```
