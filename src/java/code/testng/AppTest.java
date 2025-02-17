package com.example.tests;

import com.example.App;
import org.testng.Assert;
import org.testng.annotations.Test;

public class AppTest {

    @Test
    public void Test_without_any_Qase_annotations() {
        App app = new App();
        int result = app.add(2, 3);
        Assert.assertEquals(result, 5, "Expected 2 + 3 to equal 5");
    }
}
