package com.beniel.app;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beniel.model.Student;

public class LaunchFirstApp {

	public static void main(String[] args) {

		// Step 01 Configuration Object
		Configuration config = new Configuration();
		// Configuration object is used to configure Hibernate before creating the SessionFactory.


		// Step 2 configure hibernate.cfg.xml file to Configuration Object
		config.configure();
		// By default, configure() looks for hibernate.cfg.xml in the classpath.
		// It loads database connection details, Hibernate properties and entity mappings.


		// Step 3 Create SessionFactory Object
		SessionFactory sessionFactory = config.buildSessionFactory();
		// SessionFactory is a heavyweight object and is normally created only once.
		// It is responsible for creating Session objects.


		// Step4 Get the Session Object from Session Factory
		Session session = sessionFactory.openSession();
		// Session represents a connection between the Java application and Hibernate.
		// It is used to perform database operations such as save, update, delete and retrieve.


		// Step 5 Begin the Transaction within Session
		Transaction transaction = session.beginTransaction();
		// A transaction groups database operations into one unit of work.
		// Changes are permanently applied to the database when commit() is called.


		Student student = new Student();

		student.setId(1);
		student.setSname("Rohan");
		student.setScity("Bengaluru");
		// The Student object is populated with the values that will be stored in the database.


		// Step 6 Perform Operation
		session.save(student);
		// save() makes the Student object persistent and schedules an INSERT operation.
		// Note: save() is an older Hibernate API; persist() is preferred in modern JPA/Hibernate.


		// Step 7 Performing Transaction operations
		transaction.commit();
		// commit() permanently applies the pending database changes.
		// Hibernate sends the generated SQL to the database as part of the transaction.


		// Step 8 Close the Session
		session.close();
		// Closing the Session releases the resources associated with it.
	}

}

/*
FLOW:
Configuration
      ↓
configure()
      ↓
SessionFactory
      ↓
Session
      ↓
Transaction
      ↓
Create Student Object
      ↓
session.save()
      ↓
Hibernate
      ↓
SQL INSERT
      ↓
transaction.commit()
      ↓
MySQL Table
      ↓
session.close()
*/