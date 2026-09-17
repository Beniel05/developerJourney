/* 
Specifying the target columns—username, email, password, and city—directly in the PreparedStatement is crucial. 
**Without explicitly naming these columns, you risk a structural mismatch error, or worse, inserting data into the wrong database columns.** 
-- This throws a SQLException because the database expects 6 values (including ID and Timestamp), but only gets 4.
String INSERT_USER_SQL = "INSERT INTO users VALUES (?, ?, ?, ?);"; 

By declaring them explicitly, you ensure the values map perfectly to their correct slots, 
while allowing MySQL to safely **auto-increment the id** and **automatically add the created_at timestamp** behind the scenes.
-- This tells MySQL exactly which 4 columns are being supplied, leaving ID to auto-increment and Timestamp to auto-add.
String INSERT_USER_SQL = "INSERT INTO users (username, email, password, city) VALUES (?, ?, ?, ?);"; 
*/

CREATE DATABASE servlet_jdbc_register_demo;
USE servlet_jdbc_register_demo;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, -- Long length to support hashed passwords
    city VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM users;