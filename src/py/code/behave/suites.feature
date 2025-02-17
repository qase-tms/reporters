Feature: Qase Suite

  @qase.suite:A_Suite
  Scenario: A test case with a defined suite
    Given a user is logged into the system
    And the user has an active subscription with plan "Premium" and status "Active"
    When the user tries to access a premium feature
    Then the feature should be accessible

  @qase.suite:A_Suite||A_Child_Suite
  Scenario: A test case within a child suite
    Given a user is logged into the system
    And the user has an active subscription with plan "Business" and status "Active"
    When the user tries to access a premium feature
    Then the feature should be accessible
