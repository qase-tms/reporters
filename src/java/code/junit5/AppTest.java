package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class AppTest {

    @Test
    void Test_without_any_Qase_Annotations() {
        // Arrange
        App app = new App();

        // Act
        int result = app.add(2, 3);

        // Assert
        assertEquals(5, result, "2 + 3 should equal 5");
    }
}
