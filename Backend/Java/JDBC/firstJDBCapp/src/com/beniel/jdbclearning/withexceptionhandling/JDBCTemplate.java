package com.beniel.jdbclearning.withexceptionhandling;

import java.sql.*;

public class JDBCTemplate {
	public static void main(String[] args) {
		
		// Due to scope issue of finally block - declaring these variables outside.
		Connection connect = null;
		Statement statement = null;

		try {			
			Class.forName("com.mysql.cj.jdbc.Driver");

			String url = "jdbc:mysql://localhost:3306/jdbclearning";
			connect = DriverManager.getConnection(url, "root", "root"); // url, user, password

			statement = connect.createStatement();
		}	
		catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally {	
			try {				
				statement.close();
				connect.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

	}
}
