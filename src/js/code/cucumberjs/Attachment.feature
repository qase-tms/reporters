Feature: Qase Attachment

// ANCHOR: syntax
  Scenario: Scenario with attachment for a step
    Given I have a step with attachment

    # ./step_definitions/syntaxSteps.js: The step definition shall contain the attachment. 
    #
    # Given("I have a step with attachment", function () {
    #   console.log("Test passed");
    #   this.attach("I'm an attachment", "text/plain");
    # });
// ANCHOR_END: syntax
