package com.example.tests;

import io.qase.commons.annotation.*;
import org.testng.annotations.Test;

public class IgnoreTest {
    @Test
    @QaseIgnore
    public void testWithIgnore_success() {
        System.out.println("Test with ignore success");
    }
}
