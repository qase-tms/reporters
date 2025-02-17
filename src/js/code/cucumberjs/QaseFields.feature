Feature: Qase Fields

// ANCHOR: syntax
  @QaseFields={"description":"In_BDD,_stories_guide_the_way."}
  Scenario: Scenario with Qase Description
    Given I have a step

  @QaseFields={"preconditions":"Features_speak_what_users_say."}
  Scenario: Scenario with Qase Precondition
    Given I have a step

  @QaseFields={"postconditions":"Tests_bring_life_to_code_each_day."}
  Scenario: Scenario with Qase Postcondition
    Given I have a step

  @QaseFields={"severity":"blocker"}
  Scenario: Scenario with Field: Severity - blocker
    Given I have a step

  @QaseFields={"layer":"e2e"}
  Scenario: Scenario with Field: Layer - e2e
    Given I have a step

  @QaseFields={"priority":"high"}
  Scenario: Scenario with Field: Priority - high
    Given I have a step
// ANCHOR_END: syntax


  ## Qase field: Severity ##

  @QaseFields={"severity":"blocker"}
  Scenario: Scenario with Field: Severity - blocker
    Given I have a step

  @QaseFields={"severity":"critical"}
  Scenario: Scenario with Field: Severity - critical
    Given I have a step

  @QaseFields={"severity":"major"}
  Scenario: Scenario with Field: Severity - major
    Given I have a step

  @QaseFields={"severity":"normal"}
  Scenario: Scenario with Field: Severity - normal
    Given I have a step

  @QaseFields={"severity":"minor"}
  Scenario: Scenario with Field: Severity - minor
    Given I have a step

  @QaseFields={"severity":"trivial"}
  Scenario: Scenario with Field: Severity - trivial
    Given I have a step

  ## Qase field: Layer ##

  @QaseFields={"layer":"e2e"}
  Scenario: Scenario with Field: Layer - e2e
    Given I have a step

  @QaseFields={"layer":"api"}
  Scenario: Scenario with Field: Layer - api
    Given I have a step

  @QaseFields={"layer":"unit"}
  Scenario: Scenario with Field: Layer - unit
    Given I have a step

  ## Qase field: Priority ##

  @QaseFields={"priority":"high"}
  Scenario: Scenario with Field: Priority - high
    Given I have a step

  @QaseFields={"priority":"medium"}
  Scenario: Scenario with Field: Priority - medium
    Given I have a step

  @QaseFields={"priority":"low"}
  Scenario: Scenario with Field: Priority - low
    Given I have a step
