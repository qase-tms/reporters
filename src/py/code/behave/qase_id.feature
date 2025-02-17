Feature: Using Qase ID Tag

  # Replace with an actual test case ID from your project.
  @qase.id:1   
  Scenario: User with active subscription can access premium feature  
    Given a user is logged into the system  
    And the user has an active subscription with plan "Premium" and status "Active"  
    When the user tries to access a premium feature  
    Then the feature should be accessible  
