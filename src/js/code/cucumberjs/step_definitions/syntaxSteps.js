const { Given, When, Then } = require("@cucumber/cucumber");

Given("I have a step", function () {
  console.log("Test passed");
});

Given("I have a step with attachment", function () {
  console.log("Test passed");
  this.attach("I'm an attachment", "text/plain");
});

When("I do something", function () {
  console.log("Test passed");
});

Then("I expect something to happen", function () {
  console.log("Test passed");
});

Then("I fail", function () {
  throw new Error("Test fails");
});

When("I fail", function () {
  throw new Error("Test fails");
});

Given("I have a table with {int} rows", function (rows) {
  console.log(`Table with ${rows} rows`);
});

Then("the table should have {int} rows", function (rows) {
  console.log(`Table with ${rows} rows`);
  this.attach("image/png;base64", "image/png;base64", "image/png;base64");
});
