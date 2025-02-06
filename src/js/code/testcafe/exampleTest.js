import { test } from 'testcafe';

fixture('Getting Started')
    .page('https://devexpress.github.io/testcafe/example');

test('Example Test', async t => {
    await t.expect(true).ok();
});
