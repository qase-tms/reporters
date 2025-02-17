package com.example;

import io.qase.commons.annotation.Step;
import org.junit.jupiter.api.Test;

public class StepsTest {

    @Step("Step 1")
    public void step1() {
        step1_1();
        System.out.println("Step 1");
    }

    @Step("Step 1.1")
    public void step1_1() {
        System.out.println("Step 1.1");
    }

    @Step("Step 2")
    public void step2() {
        System.out.println("Step 2");
    }

    @Step("Step 3")
    public void step3() {
        System.out.println("Step 3");
    }

    @Test
    public void testWithSteps_success() {
        System.out.println("Test with steps success");
        step1();
        step2();
        step3();
    }
}
