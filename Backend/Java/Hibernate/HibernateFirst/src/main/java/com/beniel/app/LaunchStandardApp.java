package com.beniel.app;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import com.beniel.model.Student;

public class LaunchStandardApp {
    public static void main(String[] args) {
    
        Configuration config = new Configuration().configure();
        SessionFactory sessionFactory = null;
        Session session = null;
        Transaction transaction = null;
        
        try {
            sessionFactory = config.buildSessionFactory();
            session = sessionFactory.openSession();
            transaction = session.beginTransaction();
            
            Student student = new Student();
            student.setId(2);
            student.setSname("Bob");
            student.setScity("New York");
            
            session.persist(student);
            
            // Commit happens inside the try block. 
            // If it fails, execution immediately jumps to the catch blocks below.
            transaction.commit(); 
            System.out.println("Transaction committed successfully!");
            
        } catch (HibernateException e) {
            e.printStackTrace();
            // Rollback if the transaction was started and can be undone
            if (transaction != null && transaction.getStatus().canRollback()) {
                transaction.rollback();
            }
        } catch (Exception e) {
            e.printStackTrace();
            if (transaction != null && transaction.getStatus().canRollback()) {
                transaction.rollback();
            }
        } finally {
            // The finally block is now 100% dedicated to safe cleanup
            if (session != null) {
                session.close();
            }
            if (sessionFactory != null) {
                sessionFactory.close();
            }
            System.out.println("Resources safely closed.");
        }
    }
}
