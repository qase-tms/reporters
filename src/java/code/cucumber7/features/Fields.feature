Feature: Qase Fields

  @QaseFields={"description":"In_BDD,_stories_guide_the_way."}
  Scenario: Scenario with Qase Description
    Then An example step

  @QaseFields={"preconditions":"Features_speak_what_users_say."}
  Scenario: Scenario with Qase Precondition
    Then An example step

  @QaseFields={"postconditions":"Tests_bring_life_to_code_each_day."}
  Scenario: Scenario with Qase Postcondition
    Then An example step


  ## Qase field: Severity ##

  @QaseFields={"severity":"blocker"}
  Scenario: Scenario with Field: Severity - blocker
    Then An example step

  @QaseFields={"severity":"critical"}
  Scenario: Scenario with Field: Severity - critical
    Then An example step

  @QaseFields={"severity":"major"}
  Scenario: Scenario with Field: Severity - major
    Then An example step

  @QaseFields={"severity":"normal"}
  Scenario: Scenario with Field: Severity - normal
    Then An example step

  @QaseFields={"severity":"minor"}
  Scenario: Scenario with Field: Severity - minor
    Then An example step

  @QaseFields={"severity":"trivial"}
  Scenario: Scenario with Field: Severity - trivial
    Then An example step

  ## Qase field: Layer ##

  @QaseFields={"layer":"e2e"}
  Scenario: Scenario with Field: Layer - e2e
    Then An example step

  @QaseFields={"layer":"api"}
  Scenario: Scenario with Field: Layer - api
    Then An example step

  @QaseFields={"layer":"unit"}
  Scenario: Scenario with Field: Layer - unit
    Then An example step

  ## Qase field: Priority ##

  @QaseFields={"priority":"high"}
  Scenario: Scenario with Field: Priority - high
    Then An example step

  @QaseFields={"priority":"medium"}
  Scenario: Scenario with Field: Priority - medium
    Then An example step

  @QaseFields={"priority":"low"}
  Scenario: Scenario with Field: Priority - low
    Then An example step
