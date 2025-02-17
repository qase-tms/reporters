Feature: Qase Ignore

  @qase.ignore
  Scenario: This test is run but the result is not reported to Qase.
    Given a user is logged into the system
    And the user has an active subscription with plan "Premium" and status "Active"
    When the user tries to access a premium feature
    Then the feature should be accessible
