package com.beniel.app;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

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
		FileInputStream fis=null;
		byte image[]=null;
		FileReader reader=null;
		char textFile[]=null;
		
		config=new Configuration();
		
		config.configure();
		
		config.addAnnotatedClass(StudentInfo.class);

		sessionFactory=config.buildSessionFactory();
		
		session=sessionFactory.openSession();
		
		try 
		{
			 fis=new FileInputStream("C:\\Users\\BENIEL\\OneDrive\\Pictures\\windows-11-dark-4k-r6.jpg");
			 image=new byte[fis.available()];
			 fis.read(image);
			 
			 File file=new File("D:\\Notepad\\Test.txt");
			 reader=new FileReader(file);
			 textFile= new char[(int)file.length()];
			 reader.read(textFile);
			 
		} 
		catch (FileNotFoundException e1) 
		{
		
			e1.printStackTrace();
		}
		catch (Exception e1) 
		{
		
			e1.printStackTrace();
		}
		
		StudentInfo student=new StudentInfo();
		
		student.setsName("Alice");
		student.setScity("New York");
		student.setImage(image);
		student.setTextFile(textFile);
		
		
		try
		{
			transaction=session.beginTransaction();
			
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
			try {
				fis.close();
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		
			session.close();
			sessionFactory.close();
			
		}

	}

}
