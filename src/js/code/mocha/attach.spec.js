const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

describe("Example: attach.spec.js", function() {
  // ANCHOR: syntax
  it("Test result with attachment", function() {

    // To attach a single file
    this.attach({ paths: "./test/examples/attachments/test-file.txt" });

    // // Add multiple attachments.
    //this.attach({
    //  paths: ["/path/to/file", "/path/to/another/file"],
    //});
    //
    // // Upload file's contents directly from code.
    //this.attach({
    //  name: "attachment.txt",
    //  content: "Example text",
    //  contentType: "text/plain",
    //});
    //// test logic here
  });
  // ANCHOR_END: syntax
});

/**
 * To enable attachments, make sure to add the following option to your `qase.config.json`
 *
 * ```json
 * {
 *     "testops": {
 *        "uploadAttachments": true,
 *     }
 * }
 * ```
 */
