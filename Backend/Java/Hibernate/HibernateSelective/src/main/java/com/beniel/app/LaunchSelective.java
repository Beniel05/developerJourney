package com.beniel.app;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import com.beniel.model.Employee;

public class LaunchSelective {
    public static void main(String[] args) {
        SessionFactory sessionFactory = null;
        Session session = null;
        Transaction transaction = null;

        try {
            sessionFactory = new Configuration()
                    .configure()
                    .addAnnotatedClass(Employee.class)
                    .buildSessionFactory();
            
            session = sessionFactory.openSession();
            transaction = session.beginTransaction();

            Employee emp = new Employee();

            emp.setEid(1);
            emp.setEname("Alice");
            emp.setEcity("Cape Town");
            emp.setEage(22);
            
            session.persist(emp);
            
            transaction.commit();
            System.out.println("Employee added successfully!");

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
