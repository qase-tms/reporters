package com.example.tests;

import io.qase.commons.annotation.Step;
import io.qase.testng.Qase;
import org.testng.annotations.Test;

public class AttachTest {

    @Test
    public void testWithFileAttachment() {
        Qase.attach("./src/test/java/com/example/tests/attachments/test-file.txt");
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
