# Installation

To integrate Qase Reporter in your Newman setup, follow these steps:

### Activate the Newman App

To activate the app, go to the [Apps](https://app.qase.io/apps?app=newman-reporter) section in your workspace, and click on 'Activate'

Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add `newman-reporter-qase` to your project

To install and add the reporter as a development dependency, run the following in node project -

```
npm install -D newman-reporter-qase
```

### Add a configuration file for the reporter

At the very least, the reporter will need two variables defined - your Newman App's Token, and the Qase Project you want to publish the results to -

Please ensure that this file is placed in the root of your project.

// `qase.config.json` `Add your token and project code to the JSON`

```
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

### Let's verify the integration

We'll use a simple test to check if the results are being published to your Qase project.

Create a `collections/` directory in the root of your project and add the following test -

// `example-collection.json`

```
{
  "info": {
    "name": "Example API Tests",
    "_postman_id": "12345",
    "description": "A collection of API tests organized into a folder.",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "User Tests",
      "item": [
        {
          "name": "Get Users",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "https://jsonplaceholder.typicode.com/users",
              "protocol": "https",
              "host": [
                "jsonplaceholder",
                "typicode",
                "com"
              ],
              "path": [
                "users"
              ]
            }
          },
          "event": [
            {
              "listen": "test",
              "script": {
                "type": "text/javascript",
                "exec": [
                  "pm.test('Status code is 200', function () {",
                  "    pm.response.to.have.status(200);",
                  "});"
                ]
              }
            }
          ],
          "response": []
        }
      ]
    }
  ]
}
```

**Now, let's run the test**, by executing the following command -

```
QASE_MODE=testops npx newman run -r qase collections/example-collection.json
```

In the above command, we're setting the reporter's mode to '`testops`' using the Environment variable `QASE_MODE`. 

Click on the link printed at the end of the run to go to the test run in Qase.

![Test run page](./pictures/newman-run_page.png)


