# Syntax

Tip: Click the _eyeball icon_ (<i class="fa fa-eye"></i>) in code blocks to toggle the visibility of the hidden lines.

> [**Click here**](https://github.com/cskmnrpt/qase-behave/tree/main/features) to view Example tests for the following syntax.


If you do not use any Qase syntax, the reporter uses the title from the `fixture` and `test` functions to make the Suite and Test case titles while publishing results.
 

### Qase ID
---
To associate a Test Case ID with a scenario in Behave, use the `@qase.id` function.

```python
{{#include ../code/behave/qase_id.feature:syntax}}
```


### Suite
---
You can use the `@qase.suite` annotation to group test cases under a specific suite in Qase. This helps in organizing test cases efficiently.

Unlike test cases, suites are not uniquely identified by the reporter. Instead, the suite title is used for matching when defining an existing suite.

```python
{{#include ../code/behave/suites.feature:syntax}}
```

### Fields
---
Use `@qase.fields` annotation to associate custom metadata with test scenarios in Qase. This allows you to specify additional details such as descriptions, preconditions, postconditions, severity, test layers, and priority.

```python
{{#include ../code/behave/fields.feature:syntax}}
```

### Parameters
---
You can use Scenario Outlines with Examples in Behave to run the same test multiple times with different data. Each row in the Examples table represents a different test case with unique parameters. These parameterized tests are useful for covering multiple scenarios efficiently.

```python
{{#include ../code/behave/parametrized.feature:syntax}}
```


### Ignore
---
Use the `@qase.ignore` annotation to prevent a test result from being reported to Qase. This means that while the test will still execute, its result will not be sent to Qase.

```python
{{#include ../code/behave/ignore.feature:syntax}}
```