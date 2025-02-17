package com.example;

import io.qase.commons.annotation.*;
import io.qase.commons.models.annotation.Field;
import org.junit.jupiter.api.Test;

public class FieldsTest {

    @Test
    @QaseFields(value = {
            @Field(name = "preconditions", value = "Write your preconditions here."),
    })
    public void testWithFields_Preconditions() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "postconditions", value = "Write your postconditions here."),
    })
    public void testWithFields_Postconditions() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "description", value = "Write your description here."),
    })
    public void testWithFields_Description() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "priority", value = "low"),
    })
    public void testWithFields_Priority_low() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "priority", value = "medium"),
    })
    public void testWithFields_Priority_medium() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "priority", value = "high"),
    })
    public void testWithFields_Priority_high() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "severity", value = "trivial"),
    })
    public void testWithFields_Severity_trivial() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "severity", value = "minor"),
    })
    public void testWithFields_Severity_minor() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "severity", value = "normal"),
    })
    public void testWithFields_Severity_normal() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "severity", value = "major"),
    })
    public void testWithFields_Severity_major() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "severity", value = "critical"),
    })
    public void testWithFields_Severity_critical() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "severity", value = "blocker"),
    })
    public void testWithFields_Severity_blocker() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "layer", value = "e2e"),
    })
    public void testWithFields_Layer_e2e() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "layer", value = "api"),
    })
    public void testWithFields_Layer_api() {
        System.out.println("Passed");
    }

    @Test
    @QaseFields(value = {
            @Field(name = "layer", value = "unit"),
    })
    public void testWithFields_Layer_unit() {
        System.out.println("Passed");
    }
}
