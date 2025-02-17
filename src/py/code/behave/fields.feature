Feature: Qase Fields

  @qase.fields:{"description":"User_logs_in_and_attempts_to_access_a_premium_feature."}
  Scenario: Scenario with Qase Description
    Given a user is logged into the system

  @qase.fields:{"preconditions":"User_must_have_an_account_and_be_logged_in."}
  Scenario: Scenario with Qase Precondition
    Given a user is logged into the system

  @qase.fields:{"postconditions":"System_should_log_access_attempts_for_audit_purposes."}
  Scenario: Scenario with Qase Postcondition
    Given a user is logged into the system

  ## Qase field: Severity ##

  @qase.fields:{"severity":"blocker"}
  Scenario: Scenario with Field: Severity - blocker
    Given a user is logged into the system

  @qase.fields:{"severity":"critical"}
  Scenario: Scenario with Field: Severity - critical
    Given a user is logged into the system

  @qase.fields:{"severity":"major"}
  Scenario: Scenario with Field: Severity - major
    Given a user is logged into the system

  @qase.fields:{"severity":"normal"}
  Scenario: Scenario with Field: Severity - normal
    Given a user is logged into the system

  @qase.fields:{"severity":"minor"}
  Scenario: Scenario with Field: Severity - minor
    Given a user is logged into the system

  @qase.fields:{"severity":"trivial"}
  Scenario: Scenario with Field: Severity - trivial
    Given a user is logged into the system

  ## Qase field: Layer ##

  @qase.fields:{"layer":"e2e"}
  Scenario: Scenario with Field: Layer - e2e
    Given a user is logged into the system

  @qase.fields:{"layer":"api"}
  Scenario: Scenario with Field: Layer - api
    Given a user is logged into the system

  @qase.fields:{"layer":"unit"}
  Scenario: Scenario with Field: Layer - unit
    Given a user is logged into the system

  ## Qase field: Priority ##

  @qase.fields:{"priority":"high"}
  Scenario: Scenario with Field: Priority - high
    Given a user is logged into the system

  @qase.fields:{"priority":"medium"}
  Scenario: Scenario with Field: Priority - medium
    Given a user is logged into the system

  @qase.fields:{"priority":"low"}
  Scenario: Scenario with Field: Priority - low
    Given a user is logged into the system
