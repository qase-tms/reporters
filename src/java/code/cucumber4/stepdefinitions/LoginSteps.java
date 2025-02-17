package com.example.stepdefinitions;

import io.cucumber.java.en.*;

public class LoginSteps {

    @Given("I navigate to the login page")
    public void iNavigateToTheLoginPage() {
        System.out.println("Navigating to login page...");
    }

    @When("I enter valid username and password")
    public void iEnterValidCredentials() {
        System.out.println("Entering valid credentials...");
    }

    @Then("I should be redirected to the dashboard")
    public void iShouldBeRedirectedToDashboard() {
        System.out.println("Successfully logged in!");
    }
}
