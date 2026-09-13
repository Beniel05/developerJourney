package com.beniel.jdbclearning.withexceptionhandling;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class LaunchApp11_Batch {
	
	public static void main(String[] args) {
		
		Connection connect = null;
		PreparedStatement prepStatement = null;

		try {			
			connect = JDBCUtil.getConnection();

			// 1. ADD THIS: Turn off auto-commit to prevent line-by-line DB trips
			connect.setAutoCommit(false); 

			String query = "INSERT INTO studentinfo(id, sname, sage, scity) VALUES(?,?,?,?)";
			prepStatement = connect.prepareStatement(query);
		
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
				
				// 2. ADD THIS: Commit all 3 rows together to the database in one shot
				connect.commit(); 
				System.out.println("Query executed and committed successfully!");
			} catch (SQLException e) {
				// 3. ADD THIS: If something goes wrong (e.g., duplicate ID), undo everything
				if (connect != null) {
					connect.rollback();
				}
				System.out.println("Batch failed, rolling back changes: " + e);
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
				JDBCUtil.closeConnection(prepStatement, connect);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
