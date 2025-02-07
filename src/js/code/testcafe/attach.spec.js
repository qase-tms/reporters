//ANCHOR: syntax
// test("Test with file attachment success", async () => {
  qase.attach({ paths: ["path of file"] });
//      // Test Logic here.. 
// });

// test("Test with content attachment success", async () => {
  qase.attach({
    name: "log.txt",
    content: "Hello, World!",
    type: "text/plain",
  });
//   //Test logic goes here..
// });
//ANCHOR_END: syntax