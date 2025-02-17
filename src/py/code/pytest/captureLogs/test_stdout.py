import sys


def test_generate_stdout_logs():
    """Test generating a lot of logs to stdout."""
    for i in range(1, 101):  # Generating 100 lines of stdout logs
        print(f"Log line {i} - This is a stdout message.")


"""
To enable reporting of logs, please, add the following section to your `qase.config.json`

```json
    "framework": {
        "pytest": {
            "captureLogs": true
        }
    },
```
"""
