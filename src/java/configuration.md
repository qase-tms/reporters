# configuration

Here is the table formatted into sections for easy readability:

### Common options

| Description               | Config file   | Environment variable | CLI option         | Default value | Required | Possible values            |
|---------------------------|---------------|----------------------|--------------------|---------------|----------|----------------------------|
| Mode of reporter          | `mode`        | `QASE_MODE`          | `QASE_MODE`        | `off`         | No       | `testops`, `report`, `off` |
| Fallback mode of reporter | `fallback`    | `QASE_FALLBACK`      | `QASE_FALLBACK`    | `off`         | No       | `testops`, `report`, `off` |
| Environment               | `environment` | `QASE_ENVIRONMENT`   | `QASE_ENVIRONMENT` | undefined     | No       | Any string                 |
| Root suite                | `rootSuite`   | `QASE_ROOT_SUITE`    | `QASE_ROOT_SUITE`  | undefined     | No       | Any string                 |
| Enable debug logs         | `debug`       | `QASE_DEBUG`         | `QASE_DEBUG`       | `False`       | No       | `True`, `False`            |

### Qase Report configuration

| Description                 | Config file                | Environment variable            | CLI option                      | Default value         | Required | Possible values |
|-----------------------------|----------------------------|---------------------------------|---------------------------------|-----------------------|----------|-----------------|
| Driver used for report mode | `report.driver`            | `QASE_REPORT_DRIVER`            | `QASE_REPORT_DRIVER`            | `local`               | No       | `local`         |
| Path to save the report     | `report.connection.path`   | `QASE_REPORT_CONNECTION_PATH`   | `QASE_REPORT_CONNECTION_PATH`   | `./build/qase-report` |          |                 |
| Local report format         | `report.connection.format` | `QASE_REPORT_CONNECTION_FORMAT` | `QASE_REPORT_CONNECTION_FORMAT` | `json`                |          | `json`, `jsonp` |

### Qase TestOps configuration

| Description                     | Config file               | Environment variable           | CLI option                     | Default value                           | Required | Possible values |
|---------------------------------|---------------------------|--------------------------------|--------------------------------|-----------------------------------------|----------|-----------------|
| Token for API access            | `testops.api.token`       | `QASE_TESTOPS_API_TOKEN`       | `QASE_TESTOPS_API_TOKEN`       | undefined                               | Yes      | Any string      |
| Qase API host                   | `testops.api.host`        | `QASE_TESTOPS_API_HOST`        | `QASE_TESTOPS_API_HOST`        | `qase.io`                               | No       | Any string      |
| Qase enterprise environment     | `testops.api.enterprise`  | `QASE_TESTOPS_API_ENTERPRISE`  | `QASE_TESTOPS_API_ENTERPRISE`  | `False`                                 | No       | `True`, `False` |
| Project code                    | `testops.project`         | `QASE_TESTOPS_PROJECT`         | `QASE_TESTOPS_PROJECT`         | undefined                               | Yes      | Any string      |
| Test run ID                     | `testops.run.id`          | `QASE_TESTOPS_RUN_ID`          | `QASE_TESTOPS_RUN_ID`          | undefined                               | No       | Any integer     |
| Test run title                  | `testops.run.title`       | `QASE_TESTOPS_RUN_TITLE`       | `QASE_TESTOPS_RUN_TITLE`       | `Automated run <Current date and time>` | No       | Any string      |
| Test run description            | `testops.run.description` | `QASE_TESTOPS_RUN_DESCRIPTION` | `QASE_TESTOPS_RUN_DESCRIPTION` | `<Framework name> automated run`        | No       | Any string      |
| Test run complete               | `testops.run.complete`    | `QASE_TESTOPS_RUN_COMPLETE`    | `QASE_TESTOPS_RUN_COMPLETE`    | `True`                                  |          | `True`, `False` |
| Test plan ID                    | `testops.plan.id`         | `QASE_TESTOPS_PLAN_ID`         | `QASE_TESTOPS_PLAN_ID`         | undefined                               | No       | Any integer     |
| Batch size for sending results  | `testops.batch.size`      | `QASE_TESTOPS_BATCH_SIZE`      | `QASE_TESTOPS_BATCH_SIZE`      | `200`                                   | No       | Any integer     |
| Enable defects for failed tests | `testops.defect`          | `QASE_TESTOPS_DEFECT`          | `QASE_TESTOPS_DEFECT`          | `False`                                 | No       | `True`, `False` |

## Example `qase.config.json` config:

```json
{
  "mode": "testops",
  "fallback": "report",
  "debug": false,
  "environment": "local",
  "captureLogs": false,
  "report": {
    "driver": "local",
    "connection": {
      "local": {
        "path": "./build/qase-report",
        "format": "json"
      }
    }
  },
  "testops": {
    "api": {
      "token": "<token>",
      "host": "qase.io"
    },
    "run": {
      "title": "Regress run",
      "description": "Regress run description",
      "complete": true
    },
    "defect": false,
    "project": "<project_code>",
    "batch": {
      "size": 100
    }
  }
}
```
