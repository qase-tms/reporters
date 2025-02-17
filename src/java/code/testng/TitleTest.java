package com.example.tests;

import io.qase.commons.annotation.QaseTitle;
import org.testng.annotations.*;

public class TitleTest {

    @Test
    @QaseTitle("Test with `@QaseTitle` annotation")
    public void test() {
        System.out.println("passed");
    }
}
