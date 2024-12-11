# Qase API

You can use Qase's API endpoints and perform actions with the entities stored in the database. The API is organized around REST. You can try using the API on the [API Reference page](https://developers.qase.io/reference/introduction-to-the-qase-api), or by exploring the public page in [Postman](https://www.postman.com/qaseio?tab=collections).

## API Rate Limits

Your application can make up to 600 API requests per minute. For Enterprise customers, the limits can be changed.

When the limit is exceeded, clients receive an HTTP `429` response with a `Retry-After: X` header to indicate the timeout period before they can send requests again. The timeout period is set to 60 seconds once the limit is exceeded.

## Auth and Access control

Qase.io uses API tokens to authenticate requests. You can view and manage your API keys in the [API Tokens page](https://app.qase.io/user/api/token).

Your API keys have the same access rights as your role in the app, so keep them secure. Do not share your secret API keys in publicly accessible areas like GitHub or client-side code.

Qase API expects the API key to be included in all API requests to the server in a header that looks like this:

```
Token: API_TOKEN              # replace API_TOKEN with your own token.
```

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

Qase.io uses a Role-based Access Control system to restrict the usage of some features in the Web interface. The same rules are applied to API methods. If you don't have enough access rights, you will receive an error with a 403 status code.
