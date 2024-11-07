# Junit (4/5)

> This guide is for JUnit 5.

JUnit is an open source framework, which is used for writing and running tests. Provides annotations to identify test methods. Provides assertions for testing expected results. Provides test runners for running tests.

With the JUnit5 reporter you can publish the results of your automated test runs to your Qase project using the public API endpoints.

## Installation

To integrate Qase into your project, follow these steps -

### Activate the JUnit5 App
1. To activate the app, go to the [Apps](https://app.qase.io/apps?app=junit5-reporter) section in your workspace, and click on 'Activate'
2. Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add the reporter to your project

#### For Maven Projects

To quickly initialise a new project, run the following command -

To install and add the reporter as a dependency, add the following to your `pom.xml`:

```xml
<properties>
  <aspectj.version>1.9.22</aspectj.version>
  <maven.compiler.source>1.8</maven.compiler.source>
  <maven.compiler.target>1.8</maven.compiler.target>
</properties>

<dependencies>
  <dependency>
     <groupId>io.qase</groupId>
     <artifactId>qase-junit5-reporter</artifactId>
     <version>4.0.0</version>
     <scope>test</scope>
  </dependency>
  <dependency>
     <groupId>org.junit</groupId>
     <artifactId>junit-bom</artifactId>
     <version>5.11.2</version>
     <type>pom</type>
     <scope>test</scope>
  </dependency>
  <dependency>
     <groupId>org.junit.jupiter</groupId>
     <artifactId>junit-jupiter-api</artifactId>
     <version>5.11.2</version>
     <scope>test</scope>
  </dependency>
  <dependency>
     <groupId>org.junit.jupiter</groupId>
     <artifactId>junit-jupiter-params</artifactId>
     <version>5.11.2</version>
     <scope>test</scope>
  </dependency>
</dependencies>

<build>
  <plugins>
     <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.0.0-M5</version>
        <configuration>
           <argLine>
              -javaagent:"${settings.localRepository}/org/aspectj/aspectjweaver/${aspectj.version}/aspectjweaver-${aspectj.version}.jar"
           </argLine>
           <!-- This section is required for the proper functioning of the reporter. -->
           <properties>
              <configurationParameters>
                 junit.jupiter.extensions.autodetection.enabled = true
              </configurationParameters>
           </properties>
        </configuration>
        <dependencies>
           <dependency>
              <groupId>org.aspectj</groupId>
              <artifactId>aspectjweaver</artifactId>
              <version>${aspectj.version}</version>
           </dependency>
        </dependencies>
     </plugin>
  </plugins>
</build>
```

#### For Gradle Projects

Include the following to your `build.gradle`:

```groovy
configurations {
   aspectjweaver
}

tasks.withType(JavaCompile).configureEach {
   // Enables the adapter to accept real parameter names
   options.compilerArgs.add("-parameters")
}

dependencies {
   aspectjweaver "org.aspectj:aspectjweaver:1.9.22"
   testImplementation platform('org.junit:junit-bom:5.10.0')
   testImplementation 'org.junit.jupiter:junit-jupiter'
   testImplementation 'org.junit.jupiter:junit-jupiter-api'
   testImplementation 'org.junit.jupiter:junit-jupiter-params'
   testImplementation 'org.junit.jupiter:junit-jupiter-engine'
   testImplementation 'org.junit.platform:junit-platform-launcher'
   testImplementation('io.qase:qase-junit5-reporter:4.0.0')
}

test {
   systemProperties = System.properties
}

compileTestJava {
   options.getCompilerArgs().add("-parameters")
}

test.doFirst {
   useJUnitPlatform()
   // This line is required for the proper functioning of the reporter.
   systemProperty "junit.jupiter.extensions.autodetection.enabled", true
   def weaver = configurations.aspectjweaver.find { it.name.contains("aspectjweaver") }
   jvmArgs += "-javaagent:$weaver"
}
```

### Let's verify the integration

We'll use a simple test to check if the results are being published to your Qase project.

Replace the file in `src/test/java/com/example/` directory (your path may differ) with the code below:

```java
// AppTest.java   

package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;
import io.qase.commons.annotation.*;

public class AppTest 
{
    @Test
    @QaseTitle("Test Integration")
    public void testApp()
    {
        assertTrue(true); // A simple test that always passes
    }
}
```

Now, let's run the test, by executing the following command:

#### Maven

```
mvn clean test -DQASE_MODE=testops -DQASE_TESTOPS_PROJECT=<prj-code> -DQASE_TESTOPS_API_TOKEN=<app-token>
```

#### Gradle

```
gradle clean test -DQASE_MODE=testops -DQASE_TESTOPS_PROJECT=<prj-code> -DQASE_TESTOPS_API_TOKEN=<app-token>
```

Please refer to [this article](https://help.qase.io/en/articles/9787250-how-do-i-find-my-project-code) for guidance on how to find your Project code in Qase. In the above command, we're setting the reporter's mode with `QASE_MODE`.

You should see the following summary at the end of the execution:

```
[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running com.example.AppTest
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.262 s - in com.example.AppTest
[INFO] 
[INFO] Results:
[INFO] 
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO] 
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  3.449 s
[INFO] Finished at: 2023-11-07T12:00:00Z
[INFO] ------------------------------------------------------------------------
```

Here's how your Qase Test run should look like:

## Configuration

In the next section, we'll take a look at all the available configuration options. These options are common to all of our Java based reporters.