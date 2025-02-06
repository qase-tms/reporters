# Installation

To integrate Qase into your tavern project, follow these steps:

### Activate the Tavern App
To activate the app, go to the '[Apps](https://app.qase.io/apps?app=tavern-reporter)' section in your workspace, and click on 'Activate'

Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add qase-tavern to your project
To install the reporter, run the following command in a *[virtual environment](https://www.geeksforgeeks.org/python-virtual-environment/)*:

```sh
pip install qase-tavern
```

### Add a configuration file for the reporter
At the very least, the reporter will need two variables defined - your tavern App's Token, and the Qase Project you want to publish the results to.

Please ensure that this file is placed in the root of your project.

`qase.config.json`:
```json
{{#include ../../intro/code/qase.config.json:basic}}
```

Please refer to this article for guidance on how to find your Project code in Qase.

### Verify the integration
We'll use a simple test to check if the results are being published to your Qase project. Create the directory `tests/` in the root of your project and add the following test:

`tests/test_simple.tavern.yaml`
```yaml
test_name: "Simple Status Code Test"

stages:
  - name: "Check status code"
    request:
      url: "https://jsonplaceholder.typicode.com/posts/1"
      method: "GET"
    response:
      status_code: 200
```

Now, let's run the test by executing the following command:

```bash
QASE_MODE=testops tavern --format=qase.tavern.formatter:QaseFormatter
```

In the above command, we're setting the reporter's mode to 'testops' using the Environment variable `QASE_MODE`. You can learn more about other reporter modes here.
