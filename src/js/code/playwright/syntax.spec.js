// ANCHOR: syntax
import { qase } from 'playwright-qase-reporter';

describe('Suite title', () => {

  test(qase(1, "This is the test name"), () => {
    qase.title("This overrides the test name");
    qase.suite("Suite name");
    qase.fields({ 'severity': 'high', 'priority': 'medium' });
    qase.attach({ paths: './tests/examples/attachments/test-file.txt' });
    qase.comment("A comment for this result");
    qase.ignore(); // doesn't report his result to Qase.
    qase.parameters({ Username: "@test" }); 
    qase.groupParameters({ Username: username, Password: "123" });
    await test.step('Test step title', async () => // step logic });
  // // test logic
  });

/* ANCHOR_END: syntax */
