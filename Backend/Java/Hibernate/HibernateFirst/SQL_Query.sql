# HibernateFirst\src\main\resources\hibernate.cfg.xml

-- CREATING THE DATABASE - add this in the hibernate.cfg.xml
CREATE DATABASE hibernate_demo_db;

-- It will drop any existing tables first and then create new ones in your MySQL database based on your mapped entities.
use hibernate_demo_db;

-- To view the records
select * from studenttable;