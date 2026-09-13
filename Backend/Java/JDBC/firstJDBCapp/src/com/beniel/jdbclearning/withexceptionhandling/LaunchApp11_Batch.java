package com.beniel.jdbclearning.withexceptionhandling;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class LaunchApp11_Batch {
	// .addBatch() and .executeBatch() can be used with both Statement and PreparedStatement.
	// But only works with Non-Selecting Operations -> INSERT, UPDATE and DELETE.
	
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
		
			// Setting the values from the user - to their respective '?'s in the compiled query.
			// 1st Query
			int id = 4; String name = "David"; int age = 22; String city = "New York";
			prepStatement.setInt(1, id); prepStatement.setString(2, name); prepStatement.setInt(3, age); prepStatement.setString(4, city);
			prepStatement.addBatch();
			// 2nd Query
			prepStatement.setInt(1, 5); prepStatement.setString(2, "Emily"); prepStatement.setInt(3, 21); prepStatement.setString(4, "Georgia");
			prepStatement.addBatch();
			// 3rd Query
			prepStatement.setInt(1, 6); prepStatement.setString(2, "Flora"); prepStatement.setInt(3, 25); prepStatement.setString(4, "Hawaii");
			prepStatement.addBatch();
			
			try {
				prepStatement.executeBatch();
				System.out.println("Query executed");
			} catch (SQLException e) {
				System.out.println(e);
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
