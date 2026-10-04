package com.beniel.app;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beniel.model.StudentInfo;

public class LOBRetrievalApp {

	public static void main(String[] args) {
		Configuration config = null;
		SessionFactory sessionFactory = null;
		Session session = null;
		Transaction transaction = null;
		boolean flag=false;
		FileOutputStream fos=null;
		FileWriter writer=null;

		byte image[]=null;
		
		char textFile[]=null;
		
		config=new Configuration();
		
		config.configure();
		
		config.addAnnotatedClass(StudentInfo.class);

		sessionFactory=config.buildSessionFactory();
		
		session=sessionFactory.openSession();
		StudentInfo studentInfo = session.get(StudentInfo.class, 1);
		try 
		{
			fos=new FileOutputStream("Window.JPG");
			writer=new FileWriter("TextFile.txt");
			
			fos.write(studentInfo.getImage());
			writer.write(studentInfo.getTextFile());
			 
		} 
		catch (FileNotFoundException e1) 
		{
		
			e1.printStackTrace();
		}
		catch (Exception e1) 
		{
		
			e1.printStackTrace();
		}
		
		finally
		{
			
			try {
				fos.close();
				writer.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			session.close();
			sessionFactory.close();
			
		}

	}



}
