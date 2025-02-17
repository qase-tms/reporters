const { Given, Then } = require("@cucumber/cucumber");

Given(
  "I have a table with {int} rows and {int} columns",
  function (rows, columns) {
    console.log(`Table with ${rows} rows and ${columns} columns`);
  },
);

Then(
  "the table should have {int} rows and {int} columns",
  function (rows, columns) {
    console.log(`Table with ${rows} rows and ${columns} columns`);
    this.attach("image/png;base64", "image/png;base64", "image/png;base64");
  },
);
