## Using Qase CLI

You can generate an API token from [here](https://app.qase.io/user/api/token) and refer to [this guide](https://help.qase.io/en/articles/9787250-how-do-i-find-my-project-code) to find your project code and run_id in Qase.

### Create a Test Run

You can create a test run using the `create` command. This command creates a new test run in the specified project and saves a test run ID to a file.

You can specify the file path using the `--output` option. If not specified, the test run ID will be saved to `qase.env` in the current directory.

The file will contain the test run ID in the following format:

```
QASE_TESTOPS_RUN_ID=123
```

To extract the test run ID from file:

```bash
cat qase.env | grep QASE_TESTOPS_RUN_ID | cut -d'=' -f2
```

Example usage:

```bash
qli testops run create \
-p <project_code> \
-t <token> \
--title <title> \
-d <description> \
-e <environment> \
-m <milestone> \
-o <plan> \
-v
```

#### Create Command Options

Required:
- `--project, -p`: The project code where the test run will be created
- `--token, -t`: The API token to authenticate with the Qase API
- `--title`: The name of the test run

Optional:
- `--description, -d`: The description of the test run
- `--environment, -e`: The environment where the test run will be executed
- `--milestone, -m`: The milestone of the test run
- `--plan`: The test plan of the test run
- `--output, -o`: Output path to save the run Id (default: qase.env in working directory)
- `--verbose, -v`: Enable verbose mode

Example:

```bash
qli testops run create \
--project DEMO \
--token <token> \
--title "Example test run created using Qase CLI" \
--verbose
```

### Complete a Test Run

Use the `complete` command to complete a test run in the specified project.

Example usage:

```bash
qli testops run complete \
--project <project_code> \
--token <token> \
--id <run_id> \
--verbose
```

The `--id` flag takes the ID of the Qase test run that is to be marked complete.

Example:

```bash
qli testops run complete --project DEMO --token <token> --id 1 --verbose
```

### Upload Test Results

Use the `upload` command to upload test results for a test run in the specified project.

Example usage:

```bash
qli testops result upload \
--project <project_code> \
--token <token> \
--id <run_id> \
--format <format> \
--path <results_file> \
--batch <batch> \
--verbose
```

#### Upload Command Options

Required:
- `--project, -p`: The project code where the test results will be uploaded
- `--token, -t`: The API token to authenticate with the Qase API
- `--id`: The ID of the test run to upload results for (Required if title is not set)
- `--title`: The title of the test results (Required if id is not set)
- `--path`: The path to the test results file or folder
- `--format`: The format of the test results file (Allowed values: junit, qase, allure, xctest)

Optional:
- `--description, -d`: The description of the test results
- `--steps`: The mode of upload steps for XCTest (Allowed values: all, user)
- `--batch`: The batch number of the test results (Default: 200)
- `--suite, -s`: Define the root suite for all the test results
- `--verbose, -v`: Enable verbose mode

Example:
```bash
qli testops result upload \
--project DEMO \
--token <token> \
--id 1 \
--format junit \
--path /path/to/results.xml \
--verbose
```

Paths for different result types:
- Qase format: `--path /path/to/build/qase-results/results.json`
- Allure format: `--path /path/to/allure-results`
- XCTest format: `--path /path/to/xctest-results`

### Create Environments and Milestones

Similar to creating test runs, use the `create` command to create a new environment or milestone in the specified project and save a value to a file.

The path for saving the `qase.env` file can be specified using the `--output` option. If not specified, `qase.env` will be saved to the working directory.

The file will contain:
```
QASE_ENVIRONMENT=<slug>
```
or
```
QASE_MILESTONE=<id>
```

To extract values from the file:
```bash
cat qase.env | grep QASE_ENVIRONMENT | cut -d'=' -f2
```
```bash
cat qase.env | grep QASE_MILESTONE | cut -d'=' -f2
```

#### Create Environment

Example usage:
```bash
qli testops env create --project <project_code> \
--token <token> \
--title <title> \
--slug <slug> \
--description <description> \
--host <host> \
--verbose
```

Required options:
- `--project, -p`: The project code where the test run will be created
- `--token, -t`: The API token to authenticate with the Qase API
- `--title`: The title of the Environment
- `--slug`: The slug value of the Environment

Optional options:
- `--description, -d`: The description of the test run
- `--environment, -e`: The environment where the test run will be executed
- `--output, -o`: Output path to save qase.env
- `--verbose, -v`: Enable verbose mode

#### Create Milestone

Example usage:
```bash
qli testops milestone create --project <project_code> \
--token <token> \
--title <title> \
--description <description> \
--status <status> \
--due-date <due_date> \
--verbose
```

Required options:
- `--project, -p`: The project code where the milestone will be created
- `--token, -t`: The API token to authenticate with the Qase API
- `--title`: The name of the milestone

Optional options:
- `--description, -d`: The description of the milestone
- `--status, -s`: The status of the milestone (Allowed values: active, completed)
- `--due-date, -d`: The due date of the milestone (Format: YYYY-MM-DD)
- `--output, -o`: Output path to save qase.env
- `--verbose, -v`: Enable verbose mode
