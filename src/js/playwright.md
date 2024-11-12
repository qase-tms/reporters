# Playwright

**Playwright** is a framework for Web Testing and Automation. It allows testing Chromium, Firefox, and WebKit with a single API. Playwright is built to enable cross-browser web automation that is evergreen, capable, reliable, and fast.

With the `playwright-qase-reporter`, you can publish the results of your automated test runs to your Qase project using the public API.

<br>

# Installation
---
To integrate Qase into your Playwright project, follow these steps:

### Activate the Playwright App

To activate the app, go to the [Apps](https://app.qase.io/apps?app=playwright-reporter) section in your workspace, and click on 'Activate'.

Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add playwright-qase-reporter to your project

To install and add the reporter as a development dependency, run the following in the node project:

```bash

npm install -D playwright-qase-reporter

```

### Add the reporter to your Playwright configuration file

At the very least, the reporter will need two variables defined — your Playwright App's Token, and the Qase Project you want to publish the results to:

<br>

TypeScript: `playwright.config.ts`

```typescript

const config: PlaywrightTestConfig = {
  reporter: [
    [
      'playwright-qase-reporter',
      {
        testops: {
          api: {
            token: '<app-token>',
          },
          project: '<project-code>',
        },
      },
    ],
  ],
  // ...
};

module.exports = config;
```
Please refer to [*this article*](https://help.qase.io/en/articles/9787250-how-do-i-find-my-project-code) for guidance on how to find your Project code in Qase.
<br>
<br>

JavaScript: `playwright.config.js`

```javascript
const config = {
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    [
      'playwright-qase-reporter',
      {
        debug: false,
        testops: {
          api: {
            token: '<app-token>',
          },
          project: '<project-code>',
          uploadAttachments: true,
          run: {
            complete: true,
          },
        },
      },
    ],
  ],
};

module.exports = config;
```


If you do not want to configure the reporter's options in your Playwright configuration file, you have the option to use a `qase.config.json` to have all your reporter options defined.

Create a new `qase.config.json` file at the root of your repository, and add the project code and App token:

```json
{
  "testops": {
    "api": {
      "token": "<token>"
    },
    "project": "<proj-code"
  }
}
```

### Let's verify the integration

We'll use a simple test to check if the results are being published to your Qase project. Create a `tests/` directory in the root of your project and add the following test:

```javascript
// example.spec.js

const { test, expect } = require('@playwright/test');

test.describe('Example Test Suite', () => {
  test('A simple test to check the Playwright integration', () => {
    expect(true).toBe(true);
  });
});
```
<br>

**Now, let's run the test** by executing the following command:

```bash
QASE_MODE=testops npx playwright test
```

In the above command, we're setting the reporter's mode to 'testops' using the environment variable `QASE_MODE`. 

Click on the link printed at the end of the run to go to the test run in Qase.

<br> 

## Configuration

The **playwright-qase-reporter** can operate in two modes:

* **Testops**: publishes the report to the specified Qase Project.

* **Report**: generates a JSON report locally in the specified directory.

In the next section, we'll look at all the available configuration options.
