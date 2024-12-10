# Installation

To integrate Qase Reporter in your CucumberJS setup, follow these steps:

### Activate the CucumberJS App
To activate the app, go to the [Apps](https://app.qase.io/apps?app=cucumberjs-reporter) section in your workspace, and click on 'Activate'.

Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add `cucumberjs-qase-reporter` to your project
To install and add the reporter as a development dependency, run the following in node project:

```
npm install -D cucumberjs-qase-reporter
```

### Add a configuration file for the reporter
At the very least, the reporter will need two variables defined - your CucumberJS App's Token, and the Qase Project you want to publish the results to:

// `qase.config.json`
```
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

### Let's verify the integration
We'll use a simple test to check if the results are being published to your Qase project.

Create two directory in the root of your project - `features/` and `step_definitions/`
Add the following to these directories:

// `features/example.feature`
```
Feature: Test Qase integration.

  Scenario: A scenario with multiple steps
    Given I have a step
    And I have another step
    When I do something
    Then I expect something to happen
```

// `step_definitions/example_steps.js`
```
Feature: Test Qase integration.

  Scenario: A scenario with multiple steps
    Given I have a step
    And I have another step
    When I do something
    Then I expect something to happen
```

Now, let's run the test, by executing the following command:

```
QASE_MODE=testops npx cucumber-js -f cucumberjs-qase-reporter features -r step_definitions
```

In the above command, we're setting the reporter's mode to 'testops' using the Environment variable `QASE_MODE`.

Click on the link printed at the end of the run to go to the test run in Qase.
