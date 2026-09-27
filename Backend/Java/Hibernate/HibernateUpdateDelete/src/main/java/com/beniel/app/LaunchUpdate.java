package com.beniel.app;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import com.beniel.model.Student;

public class LaunchUpdate {
    public static void main(String[] args) {
        SessionFactory sessionFactory = null;
        Session session = null;
        Transaction transaction = null;

        try {
            sessionFactory = new Configuration()
                    .configure()
                    .addAnnotatedClass(Student.class)
                    .buildSessionFactory();
            
            session = sessionFactory.openSession();
            transaction = session.beginTransaction();

            Student st = new Student();
            st.setId(2);
            st.setSname("Charles");
            st.setScity("California");

//            session.update(st);
//            session.saveOrUpdate(st);
            session.merge(st);
            
            transaction.commit();
            System.out.println("Student updated successfully!");

        } 
        catch (HibernateException e) {
            // Roll back the transaction if something went wrong
            if (transaction != null && transaction.getStatus().canRollback()) {
                transaction.rollback();
            }
            e.printStackTrace();
        } 
        catch (Exception e) {
            if (transaction != null && transaction.getStatus().canRollback()) {
                transaction.rollback();
            }
            e.printStackTrace();
        } 
        finally {
            // 1. Close the Session first
            if (session != null) {
                try { session.close(); } 
                catch (Exception e) { e.printStackTrace(); }
            }
            // 2. Close the SessionFactory last
            if (sessionFactory != null) {
                try { sessionFactory.close(); } 
                catch (Exception e) { e.printStackTrace(); }
            }
        }
    }
}
