# Installation

To integrate Qase Reporter in your Playwright setup, follow these steps:



### Activate the Playwright App

To activate the app, go to the [Apps](https://app.qase.io/apps?app=testcafe-reporter) section in your workspace, and click on 'Activate'.

Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.



### add playwright-qase-reporter to your project

To install and add the reporter as a development dependency, run the following command in your node project [^yarn]:

```bash
npm install -D testcafe-reporter-qase
```



### add the reporter to your playwright configuration file

At the very least, the reporter will need two variables defined — your playwright app's token, and the Qase project you want to publish the results to:
<br>

You can configure the reporter options in a separate file `qase.config.json`, placed in the *root directory of your project*.
```json
{{#include ../../intro/code/qase.config.json:basic}} 
```

Please refer to [*this article*](https://help.qase.io/en/articles/9787250-how-do-i-find-my-project-code) for guidance on how to find your Project code in Qase.
<br>



### Let's verify the integration

We'll use a simple test to check if the results are being published to your Qase project. Create a `tests/` directory in the root of your project and add the following test:

``` javascript
{{#include ../code/testcafe/exampleTest.js}}
```
<br>



**Now, let's run the test** by executing the following command:

```bash
QASE_MODE=testops npx testcafe chrome ./tests/exampleTest.js -r spec,qase
```

In the above command, we're setting the reporter's mode to 'testops' using the environment variable `QASE_MODE`. 
<br> 

[^yarn]: If you are using `yarn` as your package manager, please run `yarn add testcafe-reporter-qase -D` to install the reporter.
