# Installation

To integrate Qase into your project, follow these steps -

### Activate the Cucumber6 App
To activate the app, go to the [Apps](https://app.qase.io/apps?app=cucumber6-reporter) section in your workspace, and click on 'Activate'

Switch to the 'Access tokens' tab, and create a new API token from here. Save the API token as we'll need it for the next steps.

### Add the reporter to your project

#### For Maven Projects

Run the following command to quickly initialize a new project -

``` 
mvn archetype:generate \
  "-DarchetypeGroupId=io.cucumber" \
  "-DarchetypeArtifactId=cucumber-archetype" \
  "-DarchetypeVersion=6.11.0" \
  "-DgroupId=hellocucumber" \
  "-DartifactId=qase-cucumber6" \
  "-Dpackage=hellocucumber" \
  "-Dversion=1.0.0-SNAPSHOT" \
  "-DinteractiveMode=false"
```

To install and add the reporter as a dependency, add the following to your `pom.xml` -

```xml 
   <properties>
      <aspectj.version>1.9.22</aspectj.version>
      <cucumber.version>6.11.0</cucumber.version>
      <maven.compiler.source>1.8</maven.compiler.source>
      <maven.compiler.target>1.8</maven.compiler.target>
   </properties>

   <dependencies>
      <dependency>
         <groupId>io.qase</groupId>
         <artifactId>qase-cucumber-v6-reporter</artifactId>
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

def cucumberVersion = "6.11.0"

dependencies {
   aspectjweaver "org.aspectj:aspectjweaver:1.9.22"
   testImplementation 'org.testng:testng:7.5'
   testImplementation("io.cucumber:cucumber-core:$cucumberVersion")
   testImplementation("io.cucumber:cucumber-java:$cucumberVersion")
   testImplementation("io.cucumber:cucumber-testng:$cucumberVersion")
   testImplementation("io.qase:qase-cucumber-v6-reporter:4.0.0")
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

## Configure the reporter
At the very least, the reporter will need two variables defined — your Cucumber app token, and the Qase project you want to publish the results to:

Please refer to [*this article*](https://help.qase.io/en/articles/9787250-how-do-i-find-my-project-code) for guidance on how to find your Project code in Qase.

You can configure the reporter options in a separate file `qase.config.json`, placed in the *root directory of your project*.
```json
{{#include ../../intro/code/qase.config.json:basic}} 
```


### Let's verify the integration

We'll use a simple test that is included in the example project to check if the results are being published to your Qase project.

Replace this file in `src/test/java/hellocucumber/` directory, with the code below -

// RunCucumberTest.java   
```java 
package hellocucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/features", // Path to feature files
    glue = "hellocucumber" // Path to step definitions
)
public class RunCucumberTest {
}
```

Now, let's run the test, by executing the following command -

``` bash
QASE_MODE=testops mvn clean test
```

**For Gradle**
``` bash
QASE_MODE=testops gradle clean test
```

Please refer to [this article](https://help.qase.io/en/articles/9787250-how-do-i-find-my-project-code) for guidance on how to find your Project code in Qase. In the above command, we're setting the reporter's mode with `QASE_MODE`.

You should now see the test result in your Qase project.
