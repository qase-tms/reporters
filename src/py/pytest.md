# Pytest

Pytest is a Python testing framework that originated from the PyPy project. It can be used to write various types of software tests, including unit tests, integration tests, end-to-end tests, and functional tests. Its features include parametrized testing, fixtures, and assert re-writing.

With `qase-pytest` you can publish the results of your automated test runs to your Qase project using the public API.

## Installation
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

## Configuration
The `qase-pytest` reporter can operate in two modes:
* Testops: publishes the report to the specified Qase Project
* Report: generates a JSON report locally in the specified directory

### Configuration options
In addition to the above reference, the following are Pytest specific options:

| Description                                    | Config option         | Environment Variable      | CLI option                   | Default | Possible values |
|------------------------------------------------|-----------------------|----------------------------|------------------------------|---------|-----------------|
| Capture logs                                   | `pytest.capture_logs` | `QASE_PYTEST_CAPTURE_LOGS` | `--qase-pytest-capture-logs` | `False` | `true`, `false` |
| TestOps bulk (always on since v6)              | `testops.bulk`        | `QASE_TESTOPS_BULK`        | `--qase-testops-bulk`        | `True`  | `true`, `false` |
| Execution chunk size (changed to `batch.size`) | `testops.chunk`       | `QASE_TESTOPS_CHUNK`       | `--qase-testops-chunk`       |         |                 |
