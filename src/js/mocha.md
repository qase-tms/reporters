# Mocha

Mocha is a powerful and flexible JavaScript testing framework that runs on Node.js and in the browser, making it suitable for testing both server-side and client-side applications. It supports various assertion libraries, allowing developers to write tests in a style that suits their preferences.

With the `mocha-qase-reporter` you can publish the results of your automated test runs to your Qase project using the public API.

## Installation

To integrate Qase into your Mocha project, follow these steps:

### Activate the Mocha App

To activate the app, go to the [Apps](https://app.qase.io/apps?app=mocha-reporter) section in your workspace, and click on 'Activate'

Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add `mocha-qase-reporter` to your project

To install and add the reporter as a development dependency, run the following in node project:

```bash
npm install -D mocha-qase-reporter@beta
```

### Add the reporter to your mocha configuration file

`.mocharc.js`:

```javascript
module.exports = {
  reporter: "mocha-qase-reporter",
  // ... other mocha options
}
```

At the very least, the reporter will need two variables defined - your Cypress App's Token, and the Qase Project code you want to publish your results to.

We will create a new file `qase.config.json` at the root of your project to add these values.

`qase.config.json`:

```json
{
  "debug": false,
  "testops": {
    "api": {
      "token": "<app-token>"
    },
    "project": "<project-code>",
    "run": {
      "complete": true
    }
  }
}
```

Please refer to this article for guidance on how to find your Project code in Qase.

## Let's verify the integration

We'll use a simple test to check if the results are being published to your Qase project. Create a `test/` directory in the root of your project and add the following test:

`example.cy.js`:

```javascript
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

### Now, let's run the test

Execute the following command:

```bash
QASE_MODE=testops npx mocha
```

In the above command, we're setting the reporter's mode to 'testops' using the Environment variable `QASE_MODE`. You can learn more about other reporter modes here.

Click on the link printed at the end of the run to go to the test run in Qase.

## Configuration

The `mocha-qase-reporter` can operate in two modes:
* Testops: publishes the report to the specified Qase Project
* Report: generates a JSON report locally in the specified directory
