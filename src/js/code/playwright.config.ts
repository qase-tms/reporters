import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    [
      'playwright-qase-reporter',
      {
       /* You can define the reporter options here, or in a separate file. */
       // testops: {
       //   api: {
       //     token: '<app-token>',
       //   },
       //   project: '<project-code>',
        },
      },
    ],
  ],
};
