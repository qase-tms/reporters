## changelog: 
## qase-java 4.0.12

### What's new

- Logging of host system details to improve debugging and traceability.
- Output of installed packages in logs for better environment visibility.

## qase-java 4.0.11

### What's new

Implemented local time support for test run creation to improve time tracking.

## qase-java 4.0.10

### What's new

Introduced the ability to execute custom hooks before a test completes, allowing users to run custom code at the end of
test execution. More details can be found in the [documentation](https://github.com/qase-tms/qase-java/tree/main/qase-java-commons#readme)

## qase-java 4.0.9

### What's new

Resolved an issue where `execution.start_time` was not in UTC, leading to submission errors (
`The execution.start time must be at least {unix time}`).

## qase-java 4.0.8

### What's new

Added a new `attach` method in Cucumber reporters that allows passing a byte array to attach files to test results.

## qase-java 4.0.7

### What's new

Resolved PatternSyntaxException in Cucumber reporters caused by unescaped trailing backslash in regular expressions.

## qase-java 4.0.6

### What's new

- Resolved issues with listener connection when using aspects and Maven integration in Junit4.
- Updated documentation to guide proper listener setup.

## qase-java 4.0.4

### What's new

Implemented support for running only the tests included in a test plan for Junit5 reporter.  
To enable this feature, specify the test plan ID in the reporter configuration.  
You can set it either in the `qase.config.json` file or through the `QASE_TESTOPS_PLAN_ID` environment variable.

## qase-java 4.0.3

### What's new

Implemented support for running only the tests included in a test plan for TestNG reporter.  
To enable this feature, specify the test plan ID in the reporter configuration.  
You can set it either in the `qase.config.json` file or through the `QASE_TESTOPS_PLAN_ID` environment variable.