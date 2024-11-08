# changelog: pytest

> For the most up-to-date changelog, please check our [GitHub repository](https://github.com/qase-tms/qase-python/blob/main/qase-pytest/changelog.md).




## 6.1.9


Fixed an issue with parameters:

```log
INTERNALERROR>   File "/venv/lib/python3.9/site-packages/qase/pytest/plugin.py", line 331, in _set_params
INTERNALERROR>     value = str(ids[i])
INTERNALERROR> IndexError: list index out of range
```

## 6.1.8


Fixed an issue with suites [#296]

## 6.1.7


Support new version of qase-python-commons 

## 6.1.6


Fixed an issue with the handling video and trace recording for Playwright tests. If a test was part of a class, the video
and trace were not attached to the test result.

## 6.1.5


Improved the handling of videos and traces for Playwright tests.
You don't need to create a `conftest.py` file anymore. The video and trace will be attached to the test result
automatically.
You can configure the video and trace recording using the following parameters:

- `--video on` - add a video to each test
- `--video retain-on-failure` - add a video to each filed test
- `--tracing on` - add a trace to each test
- `--tracing retain-on-failure` - add a trace to each filed test
- `--output` - the directory where the video and trace will be saved. By default, the video and trace will be saved in
  the `test-results` directory.

## 6.1.4


Improve handling parameters in the `pytest.mark.parametrize` decorator.
If you specify the `ids` parameter, the reporter will use it as value of parameter in the test case.

```python
@pytest.mark.parametrize("enter", [enter_from_meta, enter_from_expedition, enter_from_news],
                         ids=["enter_from_meta", "enter_from_expedition", "enter_from_news"])
def test_enter(enter):
    enter()
```

## 6.1.3


If a video is attached to the result, it will be added as an attachment.
You can configure this functionality using the "video" parameter:

- `--video on` - add a video to each test
- `--video retain-on-failure` - add a video to each filed test

## 6.1.2


Fixed an issue with the `pytest-xdist` that caused the tests to be run in parallel and completed the test run before the
results were uploaded to Qase.

## 6.1.1


Minor release that includes all changes from beta versions 6.1.1b.

## 6.1.1b5


Fixed an issue with `network` profiler.

## 6.1.1b4


Fixed an issue with parameters like this:

```python
@pytest.mark.parametrize(argnames="foo", argvalues=["bar", "baz"])
```  

The error was:

```log
INTERNALERROR> File "/usr/local/lib/python3.12/site-packages/qase/pytest/plugin.py", line 79, in pytest_collection_modifyitems
INTERNALERROR> param_name, values = mark.args
INTERNALERROR> ^^^^^^^^^^^^^^^^^^
INTERNALERROR> ValueError: not enough values to unpack (expected 2, got 0)
```

## 6.1.1b3


Fix an issue with the video recording option when the test fails:

```log
INTERNALERROR>     video = item.funcargs['page'].video
INTERNALERROR>             ~~~~~~~~~~~~~^^^^^^^^
INTERNALERROR> KeyError: 'page'
```

## 6.1.1b2


If the video recording option is enabled and the test fails, the video will be attached to the test result when using
Playwright.

For configuration, you should create a `conftest.py` file in the root of your project and add the following code:

```python
import pytest


# Configure Playwright to record video for all tests
@pytest.fixture(scope="session")
def browser_context_args(browser_context_args):
    return {
        **browser_context_args,
        "record_video_dir": "./videos",  # Directory where videos will be saved
        "record_video_size": {"width": 1280, "height": 720}  # Video resolution
    }
```

## 6.1.1b1


Support `pytest-rerunfailures` plugin. This plugin allows you to rerun failed tests.
Each test run will be uploaded as a separate result in Qase.

## 6.1.0


Minor release that includes all changes from beta versions 6.1.0b.
And also added support for group parameters.

## 6.1.0b4


- Exclude the default parameters that are added by additional libraries and start with `__pytest`
- If you use the `testops` mode and specify a plan ID then the reporter will run the tests specified in the test plan
  based on their IDs.

## 6.1.0b3


Fixed an issue then `qase-pytest-capture-logs` parameter did not set correct value.

## 6.1.0b2


Fixed the following issues:

- issue with `qase-pytest-capture-logs` parameter [#234].
  When using the "qase-pytest-capture-logs" parameter, an error occurred:
  `pytest: error: unrecognized arguments: --qase-pytest-capture-logs=true`

- issue with `qase-testops-batch-size` parameter [#235].
  When using the "qase-testops-batch-size" parameter, an error occurred:
  `TypeError: '>' not supported between instances of 'str' and 'int'`

## 6.1.0b1


Implemented a method that constructs a signature for each test result.
It takes the file path, suites, qase IDs, and parameters.

## 6.0.3


Fixed the issue where the suite specified in the decorator was not displayed. Fix [#231]

## 6.0.2


Fixed the issue [#226]:

```log
TypeError: unsupported operand type(s) for +: 'NoneType' and 'str'
```

## 6.0.1


Changed the name of the complete test run parameter for CLI arguments. Fix [#160]

## 6.0.0


The first release in the 6.0.x series of the Pytest reporter.

## 6.0.0b2


Turn off the sleep profiler until the test data collection is completed.
Now the profilers will turn off after the test is completed.
