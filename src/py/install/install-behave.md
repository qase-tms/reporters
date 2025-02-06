# Installation

To integrate Qase into your Behave project, follow these steps:

### Activate the Behave App
To activate the app, go to the '[Apps](https://app.qase.io/apps?app=behave-reporter)' section in your workspace, and click on 'Activate'

Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add qase-behave to your project
To install the reporter, run the following command in a *[virtual environment](https://www.geeksforgeeks.org/python-virtual-environment/)*:

```sh
pip install qase-behave
```

### Add a configuration file for the reporter
At the very least, the reporter will need two variables defined - your Behave App's Token, and the Qase Project you want to publish the results to.

Please ensure that this file is placed in the root of your project.

`qase.config.json`:
```json
{{#include ../../intro/code/qase.config.json:basic}}
```

Please refer to this article for guidance on how to find your Project code in Qase.

### Verify the integration
We'll use a simple test to check if the results are being published to your Qase project. Create the directories `features/` and `features/steps` in the root of your project and add the following:

`features/simple.feature`
```gherkin
Feature: Simple tests

  Scenario: Test without annotations success
    Given I have a simple test
    When I run it
    Then it should pass
```

`features/steps/steps.py`
```py
from behave import *

@given('I have a simple test')
def step_impl(context):
    pass

@when('I run it')
def step_impl(context):
    pass


@then('it should pass')
def step_impl(context):
    pass
```

Now, let's run the test by executing the following command:

```bash
QASE_MODE=testops behave --format=qase.behave.formatter:QaseFormatter
```

In the above command, we're setting the reporter's mode to 'testops' using the Environment variable `QASE_MODE`. You can learn more about other reporter modes here.
