### TO CREATE A DATABASE and A TABLE.

CREATE DATABASE jdbclearning;

USE jdbclearning;

CREATE TABLE studentInfo (
	id INT NOT NULL,
    sname VARCHAR(40) NOT NULL,
    sage INT NOT NULL,
    scity VARCHAR(40) NOT NULL,
    PRIMARY KEY(id)
);

select * from studentinfo;