package com.example;

import io.qase.commons.annotation.*;
import org.junit.jupiter.api.Test;

public class IgnoreTest {
    @Test
    @QaseIgnore
    public void testWithIgnore_success() {
        System.out.println("Test with ignore success");
    }
}
