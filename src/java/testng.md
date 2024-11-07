# TestNG

TestNG is a testing framework for the Java programming language created by Cédric Beust and inspired by JUnit and NUnit. The design goal of TestNG is to cover a wider range of test categories: unit, functional, end-to-end, integration, etc., with more powerful and easy-to-use functionalities.

With our TestNG reporter, you can publish the results of your automated test runs to your Qase project using the public API endpoints.

## Installation

To integrate Qase into your project, follow these steps:

### Activate the TestNG App

1. To activate the app, go to the [Apps](https://app.qase.io/apps?app=testng-reporter) section in your workspace, and click on 'Activate'.
2. Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add the reporter to your project

#### For Maven Projects

To quickly initialize a new project, run the following command:

```bash
mvn archetype:generate -DgroupId=com.example -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
```

To install and add the reporter as a dependency, add the following to your `pom.xml`:

```xml
<properties>
   <aspectj.version>1.9.22</aspectj.version>
</properties>

<dependencies>
   <dependency>
      <groupId>io.qase</groupId>
      <artifactId>qase-testng-reporter</artifactId>
      <version>4.0.0</version>
      <scope>test</scope>
   </dependency>
   <dependency>
      <groupId>org.testng</groupId>
      <artifactId>testng</artifactId>
      <version>7.1.0</version>
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

You can also use this example `pom.xml`: [Link](https://rentry.co/pyrqfrex)

#### For Gradle Projects

Include the following in your `build.gradle`:

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
   testImplementation 'io.qase:qase-testng-reporter:4.0.0'
   testImplementation 'org.testng:testng:7.1.0'
}

test {
   systemProperties = System.properties
}

test.doFirst {
   useTestNG()
   def weaver = configurations.aspectjweaver.find { it.name.contains("aspectjweaver") }
   jvmArgs += "-javaagent:$weaver"
}
```

## Let's verify the integration

We'll use a simple test to check if the results are being published to your Qase project.

Replace the file in `src/test/java/com/example/` directory (your path may differ) with the code below:

```java
// AppTest.java   
package com.example;

import org.testng.annotations.Test;
import static org.testng.Assert.assertTrue;
import io.qase.commons.annotation.*;

public class AppTest {

    @Test
    @QaseTitle("Test Integration")
    public void testApp() {
        assertTrue(true); // A simple test that always passes
    }
}
```

Now, let's run the test by executing the following command:

#### Maven

```bash
mvn clean test -DQASE_MODE=testops -DQASE_TESTOPS_PROJECT=<prj-code> -DQASE_TESTOPS_API_TOKEN=<app-token>
```

#### Gradle

```bash
gradle clean test -DQASE_MODE=testops -DQASE_TESTOPS_PROJECT=<prj-code> -DQASE_TESTOPS_API_TOKEN=<app-token>
```

Please refer to [this article](https://help.qase.io/en/articles/5816484-how-to-find-your-project-code) for guidance on how to find your Project code in Qase.

Please refer to [this article](https://help.qase.io/en/articles/9787250-how-do-i-find-my-project-code) for guidance on how to find your Project code in Qase. In the above command, we're setting the reporter's mode with `QASE_MODE`.

You should see the following summary at the end of the execution:

``` bash
21:11:04.568 [main] INFO i.q.commons.reporters.CoreReporter - Completing test run
21:11:04.888 [main] INFO io.qase.commons.client.ApiClientV1 - Test run link: https://app.qase.io/run/QD/dashboard/1859
21:11:04.888 [main] INFO i.q.c.reporters.TestopsReporter - Test run 1859 completed
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 2.985 s - in com.example.AppTest
[INFO]
[INFO] Results:
[INFO]
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO]
===================================
           BUILD SUCCESS
===================================
[INFO]
[INFO] Total time: 4.662 s
Finished at: 2024-11-07T21:11:05+05:30
===================================
```

Here's how your Qase Test run will look like: 


![Test run page](./pictures/testng-run_page.png)


## Configuration

Click the button below to look at all the available configuration options. These options are common to all of our Java-based reporters.
