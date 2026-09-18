CREATE DATABASE servlet_jdbc_register_demo;
USE servlet_jdbc_register_demo;

CREATE TABLE userinfo (
    uname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    upassword VARCHAR(255) NOT NULL,
    ucity VARCHAR(100) NOT NULL
);

SELECT * FROM userinfo;