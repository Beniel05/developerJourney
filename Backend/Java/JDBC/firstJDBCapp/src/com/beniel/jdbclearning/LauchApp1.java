package com.beniel.jdbclearning;
import java.sql.*;

public class LauchApp1 {

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
		
		// Process the response
		
		// Close all the resources
		statement.close();
		connect.close();
	}

}
