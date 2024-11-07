# Cucumber (4/5/6/7)

> This guide is for Cucumber 7.

Cucumber is a testing library that allows you to write your tests in plain language. It follows the given-when-then structure, but as you'll see the tests are very readable. Even by business users. This allows your tests to be a point of communication and collaboration.

With our Cucumber7 reporter you can publish the results of your automated test runs to your Qase project using the public API endpoints.

## Installation
To integrate Qase into your project, follow these steps -

### Activate the Cucumber7 App
To activate the app, go to the [Apps](https://app.qase.io/apps?app=cucumber7-reporter) section in your workspace, and click on 'Activate'

Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add the reporter to your project

#### For Maven Projects

Run the following command to quickly initialize a new project -

``` 
mvn archetype:generate \
  "-DarchetypeGroupId=io.cucumber" \
  "-DarchetypeArtifactId=cucumber-archetype" \
  "-DarchetypeVersion=7.18.1" \
  "-DgroupId=hellocucumber" \
  "-DartifactId=qase-cucumber7" \
  "-Dpackage=hellocucumber" \
  "-Dversion=1.0.0-SNAPSHOT" \
  "-DinteractiveMode=false"
```

Here's an example `pom.xml` that has all the required dependencies - [Link](https://rentry.co/yafswz9x).

To install and add the reporter as a dependency, add the following to your `pom.xml` -

```xml 
<properties>
   <aspectj.version>1.9.22</aspectj.version>
   <cucumber.version>7.14.0</cucumber.version>
   <maven.compiler.source>1.8</maven.compiler.source>
   <maven.compiler.target>1.8</maven.compiler.target>
</properties>

<dependencies>
   <dependency>
      <groupId>io.qase</groupId>
      <artifactId>qase-cucumber-v7-reporter</artifactId>
      <version>4.0.0</version>
      <scope>test</scope>
   </dependency>
   <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-core</artifactId>
      <version>${cucumber.version}</version>
      <scope>test</scope>
   </dependency>
   <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-java</artifactId>
      <version>${cucumber.version}</version>
      <scope>test</scope>
   </dependency>
   <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-testng</artifactId>
      <version>${cucumber.version}</version>
      <scope>test</scope>
   </dependency>
   <dependency>
      <groupId>org.testng</groupId>
      <artifactId>testng</artifactId>
      <version>7.1.0</version>
      <scope>test</scope>
   </dependency>
   <dependency>
      <groupId>org.aspectj</groupId>
      <artifactId>aspectjweaver</artifactId>
      <version>${aspectj.version}</version>
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


#### For Gradle Projects

```groovy
configurations {
   aspectjweaver
}

tasks.withType(JavaCompile).configureEach {
   // Enables the adapter to accept real parameter names
   options.compilerArgs.add("-parameters")
}

def cucumberVersion = "7.14.0"

dependencies {
   aspectjweaver "org.aspectj:aspectjweaver:1.9.22"
   testImplementation platform('org.junit:junit-bom:5.10.0')
   testImplementation "io.cucumber:cucumber-core:$cucumberVersion"
   testImplementation "io.cucumber:cucumber-java:$cucumberVersion"
   testImplementation "io.cucumber:cucumber-testng:$cucumberVersion"
   testImplementation 'org.testng:testng:7.1.0'
   testImplementation("io.qase:qase-cucumber-v7-reporter:4.0.0")
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

### Let's verify the integration

We'll use a simple test that is included in the example project to check if the results are being published to your Qase project.

Replace this file in `src/test/java/hellocucumber/` directory, with the code below -

```java 
// RunCucumberTest.java   

package hellocucumber;

import org.junit.platform.suite.api.ConfigurationParameter;
import org.junit.platform.suite.api.IncludeEngines;
import org.junit.platform.suite.api.SelectPackages;
import org.junit.platform.suite.api.Suite;

@Suite
@IncludeEngines("cucumber")
@SelectPackages("hellocucumber")

public class RunCucumberTest {
}
```

Now, let's run the test, by executing the following command -

``` bash
mvn clean test -DQASE_MODE=testops -DQASE_TESTOPS_PROJECT=<prj-code> -DQASE_TESTOPS_API_TOKEN=<app-token>
```

**For Gradle**
``` bash
gradle clean test -DQASE_MODE=testops -DQASE_TESTOPS_PROJECT=<prj-code> -DQASE_TESTOPS_API_TOKEN=<app-token>
```

Please refer to [this article](https://help.qase.io/en/articles/9787250-how-do-i-find-my-project-code) for guidance on how to find your Project code in Qase. In the above command, we're setting the reporter's mode with `QASE_MODE`.

You should see the following summary at the end of the execution -

Here's how your Qase Test run should look like -

### Configuration
In the next page, we'll look at all the available configuration options. These options are common to all of our Java based reporters.
