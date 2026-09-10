package com.beniel.jdbclearning;
import java.sql.*;

public class LaunchApp1 {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {

		// Load and Register the Driver
		Class.forName("com.mysql.cj.jdbc.Driver");
		// (or) DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
	
		// Establish the connection
		String url = "jdbc:mysql://localhost:3306/jdbclearning";
		String user = "root";
		String password = "root";
		Connection connect = DriverManager.getConnection(url, user, password);
		
		// Creating statement
		Statement statement = connect.createStatement();
		
		// Execute the query
//		String query = "INSERT INTO studentinfo(id, sname, sage, scity) VALUES(1, 'Alice', 20, 'USA')";
		String query = "INSERT INTO studentinfo VALUES(2, 'Bob', 20, 'UK')";
		int noOfRowsAffected = 0;
		try {			
			noOfRowsAffected = statement.executeUpdate(query);
		} catch (Exception e) { // If id gets duplicate entry OR Unknown Column - String/int mismatch
			System.out.println(e);
		}
		
		// Process the response
		if(noOfRowsAffected == 0) {
			System.out.println("Unable to insert data");
		} else {
			System.out.println("Data inserted. Rows affected: " + noOfRowsAffected);
		}
		
		// Close all the resources
		statement.close();
		connect.close();
	}

}
