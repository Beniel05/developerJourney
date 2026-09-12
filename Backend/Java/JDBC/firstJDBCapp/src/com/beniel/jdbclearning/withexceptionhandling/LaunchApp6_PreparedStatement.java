package com.beniel.jdbclearning.withexceptionhandling;

import java.sql.*;
import java.util.Scanner;

public class LaunchApp6_PreparedStatement {
	public static void main(String[] args) {
		
		// Due to scope issue of finally block - declaring these variables outside.
		Connection connect = null;
		PreparedStatement prepStatement = null;
//		Statement statement = null; // We going to use preparedStatement so - statement is commented out.

		try {			
			connect = JDBCUtil.getConnection();

			String query = "INSERT INTO studentinfo(id, sname, sage, scity) VALUES(?,?,?,?)";
			// Directly passing the dynamic query.
			prepStatement = connect.prepareStatement(query);

			// Initializing Scanner as sc - and getting values from the user to be inserted.
			System.out.println("Please enter the following details to be stored in DB");
			Scanner sc = new Scanner(System.in);
			System.out.println("Enter your id: ");
			Integer id = sc.nextInt();
			System.out.println("Enter your name: ");
			String name = sc.next();
			System.out.println("Enter your age: ");
			Integer age = sc.nextInt();
			System.out.println("Enter your city: ");
			String city = sc.next();
		
			// Setting the values from the user - to their respective '?'s in the compiled query.
			prepStatement.setInt(1, id);
			prepStatement.setString(2, name);
			prepStatement.setInt(3, age);
			prepStatement.setString(4, city);
			
			int noOfRowsAffected = 0;
			try {			
				// Executing the preparedStatement instead of statement.
				noOfRowsAffected = prepStatement.executeUpdate();
			} catch (Exception e) { // If id gets duplicate entry OR Unknown Column - String/int mismatch
				System.out.println(e);
			}
			
			// Process the response
			if(noOfRowsAffected == 0) {
				System.out.println("Unable to insert data");
			} else {
				System.out.println("Data inserted. Rows affected: " + noOfRowsAffected);
			}
		}	
		catch (SQLException e) {
			e.printStackTrace();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally {	
			try {
				// Passing preparedStatement instead of statement - and both has same parent type - Statement.
				// So no issue from the JDBCUtil.
				JDBCUtil.closeConnection(prepStatement, connect);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

	}
}
