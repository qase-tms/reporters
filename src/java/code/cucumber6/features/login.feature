Feature: User login - No Qase annotations

  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When I enter valid username and password
    Then I should be redirected to the dashboard
