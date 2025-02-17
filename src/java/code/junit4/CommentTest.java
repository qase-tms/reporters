package com.example;

import io.qase.junit5.Qase;
import org.junit.jupiter.api.Test;

public class CommentTest {

    @Test
    public void testWithComment_success() {
        Qase.comment("This shall appears under the 'actual result' field of the result");
        System.out.println("Test with comment success");
    }
}
