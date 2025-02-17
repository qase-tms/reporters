package com.example.tests;

import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class ParamsTest {

    @DataProvider(name = "parameterData")
    public Object[][] dataProviderMethod() {
        return new Object[][] {
                { "Example value1" },
                { "Example value2" },
                { "Example value3" }
        };
    }

    @Test(dataProvider = "parameterData")
    public void testMethod_success(String data) {
        System.out.println("Data is: " + data);
        Assert.assertNotNull(data, "Data should not be null");
    }

    @Test(dataProvider = "parameterData")
    public void testMethod_alsoPasses(String data) {
        System.out.println("Data is: " + data);
        Assert.assertEquals(data, data, "Data should equal itself");
    }
}
