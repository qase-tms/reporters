import { test } from 'testcafe';
import { qase } from 'testcafe-reporter-qase/qase';

fixture`Simple tests`
.page`http://devexpress.github.io/testcafe/example/`;


test('Simple Test', async (t) => {
    await t.expect(true).ok();
  });