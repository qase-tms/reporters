Feature: Qase Ignore

// ANCHOR: syntax
  @QaseIgnore
  Scenario: This scenario is run by CucumberJS but is not reported to Qase.
    Given I have a step
// ANCHOR_END: syntax
