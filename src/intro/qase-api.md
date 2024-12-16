# Qase API

Qase provides Public API endpoints to perform actions with the entities stored in the database. The API is organized around the REST architecture.

> Visit our [**API Documentation**](https://developers.qase.io/reference/introduction-to-the-qase-api) page, and check our [Postman collection](https://www.postman.com/qaseio/qase/collection/oxci5uj/qase-io-api).

## Basic Features
---

**API Rate Limits**: The API will accept upto 600 API requests per minute. Clients receive a HTTP `429` response, with a `Retry-After: X` header indicating a timeout period of 60 seconds, once the limit is exceeded.

**Authentication**: Qase.io uses API tokens to authenticate requests. You can manage tokens from the [API Tokens page](https://app.qase.io/user/api/token). All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

**Access control**: Qase.io employs a [Role-Based Access Control (RBAC)](https://help.qase.io/en/articles/5563741-workspace-management-roles-permissions) system to manage feature access within its web interface. These restrictions also apply to API methods. If your access rights are insufficient, the system will return a `403` status code error.

**Token**: Qase API expects the API key to be included in all API requests to the server in a header that looks like this: `Token: <your-token>`. Make sure to not share your API keys in publicly accessible areas like GitHub or client-side code.


## How to use this resource?
---

This documentation is written to be read sequentially, much like a book.

Starting with the Introduction, which provides an overview of how Qase API and Reporters function. It explains the common features shared across all reporters, details the configuration options available, and describes how reporting works under various conditions.

The Introduction also covers how to use the Qase CLI tool to submit test results from JUnit or Allure report files.

If the framework or library you are using does not already have a supported reporter, we provide guidance to help you create a custom reporter, including links to relevant resources.


> Use the arrow keys to navigate between pages. This resource is actively maintained, and we value your input! If you have suggestions to make it more useful, please don’t hesitate to reach out. 🙏
