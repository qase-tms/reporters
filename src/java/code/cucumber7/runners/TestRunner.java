package com.example.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.Test;

@Test
@CucumberOptions(features = "src/test/java/com/example/resources/features/", glue = "com.example", plugin = {
                                                                                                                                "io.qase.cucumber7.QaseEventListener",
})
public class TestRunner extends AbstractTestNGCucumberTests {
}
