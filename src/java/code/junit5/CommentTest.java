package com.example;

import io.qase.junit5.Qase;
import org.junit.jupiter.api.Test;
//ANCHOR:syntax
// public class CommentTest {
//     @Test
//     public void testWithComment_success() {
         Qase.comment("This shall appears under the 'actual result' field of the result");
//         //test logic here
// }
//ANCHOR_END:syntax