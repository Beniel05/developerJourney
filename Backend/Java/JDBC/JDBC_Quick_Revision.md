# JDBC — Quick Revision

## JDBC Flow

1. **Load & Register Driver**
   ```java
   Class.forName("com.mysql.cj.jdbc.Driver");
   ```
   → Loads the JDBC Driver class and registers it with `DriverManager`.

2. **Create Connection**
   ```java
   Connection con = DriverManager.getConnection(url, username, password);
   ```
   → Gets the connection to the database.

3. **Create Statement**
   ```java
   Statement st = con.createStatement();
   ```
   → Gets a `Statement` object from the connection.

4. **Write & Execute SQL**
   - `executeQuery()` → `SELECT`
   - `executeUpdate()` → `INSERT`, `UPDATE`, `DELETE`

5. **Process Result**
   - `ResultSet` → `SELECT`
   - `int rowsAffected` → `INSERT`, `UPDATE`, `DELETE`

---

## Statement vs PreparedStatement

### Statement
```java
Statement st = con.createStatement();
```

- SQL is supplied as a complete string.
- Usually used for static SQL.
- Repeated execution may require SQL to be compiled/prepared again.
- String concatenation with user input can cause **SQL Injection**.

### PreparedStatement
```java
PreparedStatement ps =
    con.prepareStatement("SELECT * FROM users WHERE id = ?");

ps.setInt(1, id);
```

- Uses `?` **parameters/placeholders**.
- SQL structure is prepared once and can be executed multiple times.
- Good for dynamic values.
- Parameters are treated as **data**, not SQL code → helps prevent **SQL Injection**.

### Parameterization
Instead of:

```java
"SELECT * FROM users WHERE id = " + id
```

use:

```java
"SELECT * FROM users WHERE id = ?"
```

and provide the value separately with `setInt()`, `setString()`, etc.

---

## Tiny Mental Model

**JDBC:**  
`Driver → Connection → Statement → Execute SQL → Process Result`

**Statement:** complete SQL string.

**PreparedStatement:** SQL + `?` parameters.

**SQL Injection:** user input accidentally becomes part of the SQL command.

**Before Spring Boot:** Know this flow and the basic `Statement` vs `PreparedStatement` difference. No need to memorize every JDBC API.
