# Maven Project Generation Reference

###### mvn archetype:generate -DartifactId=first-maven-app -DgroupId=com.beniel -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.5 -DinteractiveMode=false

### Parameter Breakdown

* **`mvn archetype:generate`**
  Tells Maven to build a new project using a template.
* **`-DartifactId=first-maven-app`**
  Sets the name of your project folder and final build file.
* **`-DgroupId=com.beniel`**
  Defines the root Java package structure for your code.
* **`-DarchetypeArtifactId=maven-archetype-quickstart`**
  Selects the standard, basic Java application template.
* **`-DarchetypeVersion=1.5`**
  Downloads a modern template version to support current Java environments.
* **`-DinteractiveMode=false`**
  Bypasses terminal prompts and creates the project instantly.
