# Maven Project Generation Reference

### Core Java Application Command (JAR)
```bash
mvn archetype:generate -DartifactId=first-maven-app -DgroupId=com.beniel -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.5 -DinteractiveMode=false
```

### Java Web Application Command (WAR)
```bash
mvn archetype:generate -DgroupId=com.beniel -DartifactId=beniel-web-app -DarchetypeArtifactId=maven-archetype-webapp -DarchetypeVersion=1.4 -DinteractiveMode=false
```

---

### Parameter Breakdown

* **`mvn archetype:generate`**
  Tells Maven to build a new project using a template.
* **`-DartifactId`**
  Sets the name of your project folder and final build file (e.g., `first-maven-app` or `beniel-web-app`).
* **`-DgroupId`**
  Defines the root Java package structure for your code (e.g., `com.beniel`).
* **`-DarchetypeArtifactId`**
  Selects the project template: `maven-archetype-quickstart` for standard JAR apps or `maven-archetype-webapp` for traditional WAR web apps.
* **`-DarchetypeVersion`**
  Pins the template version. Version `1.5` is standard for modern JAR projects, while version `1.4` is used for stable WAR configurations.
* **`-DinteractiveMode=false`**
  Bypasses terminal prompts and creates the project instantly using your defined flags.

---

### 📂 Missing `resources` Folder Explained

* **The Template Design:** The official Apache `maven-archetype-webapp` version `1.4` template explicitly **omits the `resources` folder by design** to keep the web layout minimal, generating *only* the `webapp` folder.
* **The Instructor's Secret:** The instructor's command line didn't create the folder either. Instead, their **IDE (like Eclipse or IntelliJ)** automatically injected the standard `src/main/resources` folder layout the moment they imported the project.
* **The Quick Fix:** Your project generation is 100% correct. Simply **right-click** inside `src/main/`, create a **New Folder**, and name it **`resources`** manually to match the video layout.
