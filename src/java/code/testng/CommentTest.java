package com.example.tests;

import io.qase.testng.Qase;
import org.testng.annotations.Test;

public class CommentTest {

    @Test
    public void testWithComment_success() {
        Qase.comment("This shall appears under the 'actual result' field of the result");
        System.out.println("Test with comment success");
    }
}
