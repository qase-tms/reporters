package com.example;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.stream.Stream;

public class ParamsTest {
    static Stream<Arguments> arguments() {
        return Stream.of(
                Arguments.of("Example1"),
                Arguments.of("Example2"),
                Arguments.of("Example3"));
    }

    @ParameterizedTest
    @MethodSource("arguments")
    public void testMethod_success1(String data) {
        System.out.println("Data is: " + data);
    }
}
