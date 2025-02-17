package com.example;

import io.qase.commons.annotation.Step;
import io.qase.junit5.Qase;
import org.junit.jupiter.api.Test;

public class AttachTest {

    @Test
    public void testWithFileAttachment() {
        Qase.attach("./src/test/java/com/example/attachments/test-file.txt");
        System.out.println("passed");
    }

    @Test
    public void testWithInlineAttachment() {
        Qase.attach("Inline.txt", "This is the content of the file", "text/plain");
        System.out.println("passed");
    }

    @Step("Step with attachment")
    public void stepWithInlineAttachment() {
        Qase.attach("Inline.txt", "This is the content of the file", "text/plain");
        System.out.println("Passed");
    }

    @Test
    public void testWithStepAttachment() {
        System.out.println("passed");
        stepWithInlineAttachment();
    }
}
