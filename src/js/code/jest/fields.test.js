const { qase } = require("jest-qase-reporter/jest");
const { markdownContent } = require("./markdownContent");

// ANCHOR:syntax
//describe("Example: fields.test.js", () => {
//  test("Priority = low", async () => {
    await qase.fields({ severity: "trivial", layer: "e2e", precondition: "example text" });
//    // //test logic here
//  });
//});
// ANCHOR_END:syntax

//   describe("Example: fields.test.js\tTest cases with field: Severity", () => {
//     test("Severity = trivial", async () => {
await qase.fields({ severity: "trivial" });
// //test logic here
//     });
//   });
//   describe("Example: fields.test.js\tTest cases with field: Layer", () => {
//     test("Layer = e2e", async () => {
await qase.fields({ layer: "e2e" });
// //test logic here
//     });
//   });
//   describe("Example: fields.test.js\tTest cases with Description, Pre & Post Conditions", () => {
//     test("Description with Markdown Support", async () => {
await qase.fields({ description: markdownContent });
// //test logic here
//     });
//     test("Preconditions with Markdown Support", async () => {
await qase.fields({ preconditions: markdownContent });
// //test logic here
//     });
//     test("Postconditions with Markdown Support", async () => {
await qase.fields({ postconditions: markdownContent });
// //test logic here
//     });
//   });
// });
