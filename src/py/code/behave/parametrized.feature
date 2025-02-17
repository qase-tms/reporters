Feature: Parametrized User Subscription Tests

  Scenario Outline: User with active subscription can access premium feature
    Given the user has an active subscription with plan "<plan>" and status "<status>"
    When the user tries to access a premium feature
    Then the feature should be accessible

    Examples:
      | plan     | status  |
      | Premium  | Active  |
      | Business | Active  |
      | Pro      | Active  |
