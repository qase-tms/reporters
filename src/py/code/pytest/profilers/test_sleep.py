import time

from qase.pytest import qase

"""
To enable this option, make sure to add the following to your `qase.config.json`

```json
{
    "profilers": [
       "sleep"
    ],
}
```
"""


def test_sleep_with_qase_steps():
    """Test example using qase.step for structured steps."""
    time.sleep(1)

    with qase.step("A Step"):
        time.sleep(1)

    with qase.step("Another step"):
        time.sleep(1)

    with qase.step("Last step"):
        assert 1 == 1, "Final assertion passed"
