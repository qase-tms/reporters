import sys


def test_generate_stderr_logs():
    """Test generating logs to stderr."""
    for i in range(1, 51):  # Generating 50 lines of stderr logs
        print(f"Error line {i} - This is a stderr message.", file=sys.stderr)


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
