const { qase } = require("jest-qase-reporter/jest");
// ANCHOR: syntax
// describe("Example: attach.test.js", () => {
//   test("Test result with attachment", async () => {
     //To attach a single file
     await qase.attach({
       paths: "./attachments/test-file.txt",
     });

     // Add multiple attachments
     await qase.attach({ paths: ['/path/to/file', '/path/to/another/file'] });

     // Upload files contents directly from code
     await qase.attach({
       name: "attachment.txt",
       content: "Hello, world!",
       contentType: "text/plain",
     });
     //// test logic here
//   });
// });
// ANCHOR_END: syntax
