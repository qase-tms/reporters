# Update

### Updating from v2.1 to v2.2
---

To update an existing test project using Qase reporter from version 2.1 to version 2.2,
run the following steps:

1. Add a metadata in the `e2e` section of `cypress.config.js`

   ```diff
     ...
     e2e: {
      setupNodeEvents(on, config) { 
        require('cypress-qase-reporter/plugin')(on, config)
   +    require('cypress-qase-reporter/metadata')(on)
       }
     }
     ...
   ```
<br>     

### Updating from v1.x to v2.1
---

To update an existing test project using Qase reporter from version 1 to version 2.1,
run the following steps:

1. Change import paths in your test files:

   ```diff
   - import { qase } from 'cypress-qase-reporter/dist/mocha'
   + import { qase } from 'cypress-qase-reporter/mocha'
   ```                                        

2. Update reporter configuration in `cypress.config.js` and/or environment variables —
   see the [configuration reference](#configuration) below.

3. Add a hook in the `e2e` section of `cypress.config.js`:

   ```diff
     ...
     e2e: {
   +   setupNodeEvents(on, config) { 
   +     require('cypress-qase-reporter/plugin')(on, config)
       }
     }
     ...
   ```

   If you already override `before:run` or `after:run` hooks in your `cypress.config.js`, use this instead:

   ```diff  
   const { beforeRunHook, afterRunHook } = require('cypress-qase-reporter/hooks');
    
   ...
     e2e: {
       setupNodeEvents(on, config) {
   +     on('before:run', async () => {
   +       console.log('override before:run');
   +       await beforeRunHook(config);
   +     });
     
   +     on('after:run', async () => {
   +       console.log('override after:run');
   +       await afterRunHook(config);
   +     });
       },
     },
     ...
   ```

