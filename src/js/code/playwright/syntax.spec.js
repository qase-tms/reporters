/* ANCHOR: all */
import { qase } from 'playwright-qase-reporter';

describe('Suite title', () => {
  test(qase(2, "Login with valid credentials"), () => {
    qase.title('Test title');
    qase.suite("Suite name");
    qase.fields({ 'severity': 'high', 'priority': 'medium' });
    qase.ignore(); // doesn't report his result to Qase.
    qase.parameters({ 'username': @test }); 
    qase.groupParameters({ 'Browser': browser, 'Username': username });
    qase.attach({ paths: './tests/examples/attachments/test-file.txt' });
    qase.comment("A comment for this result");
    await test.step('Test step title', async () => {
      expect(true).toBe(true);
    });
    expect(true).toBe(true);
  });

/* ANCHOR_END: all */
