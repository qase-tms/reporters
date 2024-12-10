# Installation

To integrate Qase into your Pytest project, follow these steps:

### Activate the Pytest App
To activate the app, go to the '[Apps](https://app.qase.io/apps?app=pytest-reporter)' section in your workspace, and click on 'Activate'

Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add qase-pytest to your project
To install the reporter, run the following command in a *virtual environment*:

```
pip install qase-pytest
```

### Add a configuration file for the reporter
At the very least, the reporter will need two variables defined - your Pytest App's Token, and the Qase Project you want to publish the results to.

Please ensure that this file is placed in the root of your project.

`qase.config.json`:
```json
{
  "debug": false,
  "testops": {
    "api": {
      "token": "<app-token>"
    },
    "project": "<project-code>"
  }
}
```

Please refer to this article for guidance on how to find your Project code in Qase.

### Verify the integration
We'll use a simple test to check if the results are being published to your Qase project. Create a `tests/` directory in the root of your project and add the following test:

`test_example.py`:
```python
def test_addition():
    assert 1 + 1 == 2
```

Now, let's run the test by executing the following command:

```bash
QASE_MODE=testops pytest tests/test_example.py
```

In the above command, we're setting the reporter's mode to 'testops' using the Environment variable `QASE_MODE`. You can learn more about other reporter modes here.
