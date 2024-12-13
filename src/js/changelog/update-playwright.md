# Update

## Updating from v1.x.x

There are two changes:

1.  Change the import paths:

    ```diff
    - import { qase } from 'playwright-qase-reporter/dist/playwright'
    + import { qase } from 'playwright-qase-reporter'
    ```

2.  Update reporter configuration in `playwright.config.js` and/or environment variables —
    see the [configuration reference](../../intro/configuration.md) below.

The previous test annotation syntax is still supported, so there is no need to rewrite the tests.
However, [check out the docs](../syntax/syntax-playwright.md) for the new, more flexible and powerful syntax.
