import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

// ANCHOR: test
test('Maintain your test meta-data from code', async () => {
  qase
    .title('Use qase annotation in a chain')
    .fields({
      severity: 'high',
      priority: 'medium',
      layer: 'api',
      description: `Code it quick, fix it slow,
                    Tech debt grows where shortcuts go,
                    Refactor later? Ha! We know.`
    })
    .attach({ paths: './tests/examples/attachments/test-file.txt' })
    .comment("This comment will be displayed in the 'Actual Result' field of the test result in Qase.");
});
// ANCHOR_END: test
