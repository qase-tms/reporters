package com.example.stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.qase.cucumber4.Qase;

public class QaseSteps {
    @Then("An example step")
    public void exampleStep() {
        System.out.println("This is an example test");
    }

    @When("Add a comment to this result")
    public void addMessage() {
        Qase.comment("Hello, from Qase support!");
    }

    @Then("Add attachment to result")
    public void addAttachments() {
        Qase.attach("./src/test/java/com/example/attachments/test-file.txt");
    }

    @Then("Add Inline-attachment to result")
    public void addAttachmentsContent() {
        Qase.attach("inline-attachment.txt", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "text/plain");
    }
}
