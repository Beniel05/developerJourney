package com.beniel.app;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.beniel.model.Student;

public class GetRecordApp {
	public static void main(String[] args) {

		SessionFactory sessionFactory = new Configuration().configure()
				.addAnnotatedClass(Student.class).buildSessionFactory();
		
		Session session = null;
		// No need for transaction obj - if we are going to perform SELECT operations
		
		try {
			session = sessionFactory.openSession();
			
			// .get() Fetches the Student record from the database using its Primary Key (ID = 1).
			// Returns null if no record matches this ID. Hits the database immediately.

//			Student student = session.get(Student.class, 1);
//			System.out.println(student);
			
//			Student student = session.load(Student.class, 1); // (DEPRECATED)
			Student student = session.getReference(Student.class, 1);
			
			if(student != null) {				
				System.out.println("Id: " + student.getId());
//				System.in.read();
				System.out.println("Name: " + student.getSname());
				System.out.println("City: " + student.getScity());
			} else {
				System.out.println("No data/ record found with the provide Primary Key (ID).");
			}
		}
		catch (HibernateException e) {
			e.printStackTrace();
		}
		catch (Exception e) {
			
		}
		finally {
			session.close();
			sessionFactory.close();
		}
		
	}
}
