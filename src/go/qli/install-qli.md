# Qase CLI App (qli)

Qase CLI, or `qli` is the command line app for Qase, written in Go. `qli` can be used to start and complete test runs, and publish test results to Qase in several formats.

You can view the source code on [GitHub](https://github.com/qase-tms/qasectl)

## Installation Options
---
### Install via go install

The easiest way to install Qase CLI is using go install:

```bash
go install github.com/qase-tms/qasectl@latest
```

Make sure to add `$GOPATH/bin` to your `$PATH` environment variable to be able to run the `qasectl` command. The binary is named `qasectl`, you may want to create an alias, as `qli`.

### Build from Source

1\. Clone the repository:

```bash
git clone https://github.com/qase-tms/qasectl.git && cd qasectl
```
<br>

2\. Build the binary:

```bash
make build
```

You will find the binary in the `build/` directory.

<br>

Try creating a test run by executing the binary:

```bash
./build/qli testops run create --project QD --token <your-token> --title "Run created from Qase-cli" --description "Hello, from qase-cli" --environment <env-slug> --verbose
```

### Use a Docker Image

1\. Pull the Docker image:

```bash
docker pull ghcr.io/qase-tms/qase-cli:latest
```

<br>

2\. Run the Docker container:

```bash
docker run --rm ghcr.io/qase-tms/qase-cli:latest <add-your-command-here>
```
