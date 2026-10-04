package com.beniel.app;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beniel.model.StudentInfo;

public class LaunchStandardApp 
{

	public static void main(String[] args) 
	{
		Configuration config = null;
		SessionFactory sessionFactory = null;
		Session session = null;
		Transaction transaction = null;
		boolean flag=false;
		
		config=new Configuration();
		
		config.configure();
		
		config.addAnnotatedClass(StudentInfo.class);

		sessionFactory=config.buildSessionFactory();
		
		session=sessionFactory.openSession();
		
		StudentInfo student=new StudentInfo();
		//student.setSid(1); No need for ID - it i'll auto assign + auto increment
		
//		student.setsName("Lana");
//		student.setScity("London");
		student.setsName("Bob");
		student.setScity("New York");
		
		try
		{
			transaction=session.beginTransaction();
			//session.save(student);
			session.persist(student);
			flag=true;
			
		}
		catch(HibernateException e)
		{
			e.printStackTrace();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		finally
		{
			if(flag==true)
			{
				transaction.commit();
			}
			else
			{
				transaction.rollback();
			}
			
			session.close();
			sessionFactory.close();
			
		}

	}

}
