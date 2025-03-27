# Syntax

Tip: Click the _eyeball icon_ (<i class="fa fa-eye"></i>) in code blocks to toggle the visibility of the hidden lines.

> [**Click here**](https://github.com/cskmnrpt/qase-robot/tree/main/resources/examples) to view Example tests for the following syntax.


If you do not use any Qase syntax, the reporter uses the title from the `fixture` and `test` functions to make the Suite and Test case titles while publishing results.


### Import Statement
---
Add the following statement at the beginning of your spec file, before any tests.

```python
import random
from qase.robotframework.method import qase
from robot.api.deco import keyword
```
Now, let's take a closer look at each of the Qase functions.

### Qase ID
---
<<<<<<< HEAD
To associate a Qase Test Case ID with test results in Robot Framework, use the [Tags] feature with Q-ID. This allows linking test execution results to test cases in Qase.
=======
To associate a Qase Test Case ID with test results in Robot Framework, use the `[Tags]` feature with `Q-ID`. This allows linking test execution results to test cases in Qase.
>>>>>>> 9b50f1b (made change to eobot code, changelog and syntax page)

```robot
{{#include ../code/robot/qaseId.robot:syntax}}
```

### Fields
---
In Robot Framework, you can define various test case attributes such as: Preconditions,Postconditions,Description,Priority,Severity and Layer.

<<<<<<< HEAD
To define a field, use the [Tags] setting with qase.fields.
=======
To define a field, use the `[Tags]` setting with `qase.field`s.
>>>>>>> 9b50f1b (made change to eobot code, changelog and syntax page)
Each field is specified as a key-value pair.

```python
{{#include ../code/robot/fields.robot:syntax}}
```

### Parameters
---
<<<<<<< HEAD
To make your tests parameterized in Robot Framework while integrating with Qase, you can use [Tags] setting with qase.params.
=======
To make your tests parameterized in Robot Framework while integrating with Qase, you can use [Tags] setting with `qase.params`.
>>>>>>> 9b50f1b (made change to eobot code, changelog and syntax page)

```python
{{#include ../code/robot/parameters.robot:syntax}}
```

### Attach
---
You can attach screenshots, logs, and other files to the test result in Qase.
For example: 

```python
{{#include ../code/robot/attachment.robot:syntax}}
```

### Ignore
---
When the `qase.ignore` tag is added to a test case in Robot Framework, the test will still execute but its result will be excluded from the Qase report and not reflected in the Qase test results or metrics.
```python
{{#include ../code/robot/ignore.robot:syntax}}
```
