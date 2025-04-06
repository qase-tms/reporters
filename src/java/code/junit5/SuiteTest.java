package com.example;

import io.qase.commons.annotation.*;
import org.junit.jupiter.api.Test;
//ANCHOR:syntax
//public class SuiteTest {
    //@Test  
    @QaseSuite("Parent Suite")
    //public void testWithSuite_success() {
        //// test logic here
    //@Test
    @QaseSuite("Parent Suite\tChild Suite")
    //public void testWithSuite_failed() {
        ////test logic here
    //}
//}
//ANCHOR_END:syntax 