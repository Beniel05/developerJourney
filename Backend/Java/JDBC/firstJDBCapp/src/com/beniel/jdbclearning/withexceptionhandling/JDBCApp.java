package com.beniel.jdbclearning.withexceptionhandling;

import java.sql.*;

public class JDBCApp {
public static void main(String[] args) {
		
		// Due to scope issue of finally block - declaring these variables outside.
		Connection connect = null;
		Statement statement = null;

		try {			
			connect = JDBCUtil.getConnection();
			// Creating statement
			statement = connect.createStatement();
			
			// Execute the query
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
		}	
		catch (SQLException e) {
			e.printStackTrace();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally {	
			try {
				JDBCUtil.closeConnection(statement, connect);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

	}
}
