# Syntax

If you are not using any Qase syntax, the reporter uses the title from the `describe` and `test` functions to make the Qase Suite and Test case titles for the new cases it creates.

## Example Spec file
---
```javascript
{{#include ../code/playwright/syntax.spec.js:all}}
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

**Inline with the `test` Function**: 

```javascript
test(qase(<id>, 'A simple test'), () => {
    ..
```
<br>

**Inside the `test` Body**: 

```javascript
test('A simple test', () => {
    qase.id(<id>);
    // Test logic here
});
```


### Qase Title
--- 

The method `qase.title('Example title');` sets the title of the test case. It applies whether a new test case is being created or the title of an existing test case is being updated – if it differs in your Qase project.

If a title is not explicitly set using the qase.title method, the title specified in the test(..) function will be used when creating new test cases. However, the qase.title method always takes precedence and overrides the test title if defined.


### Steps
--- 

The reporter uses the title from the `test.step` function as the step title. By providing clear and descriptive step names, you make it easier to understand the test’s flow when reviewing the test case.

Additionally, these steps get their own result in the Qase Test run, offering a well-organized summary of the test flow. This helps quickly identify the cause of any failures.

```javascript
  test("This is the Test's title", async () => {
    await test.step('And, this will be the step title', async () => {
      ...
```

### Fields
---

Currently, you can define `description`, `pre & post conditions`, and fields like `severity`, `priority`, `layer` with this method, allowing you to specify and maintain the context of the case, all directly from within your code. 

```javascript
{{#include ../code/playwright/chain.spec.js:test}}
```
