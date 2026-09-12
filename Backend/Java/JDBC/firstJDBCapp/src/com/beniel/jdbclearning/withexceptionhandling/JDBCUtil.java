package com.beniel.jdbclearning.withexceptionhandling;

import java.sql.*;

public class JDBCUtil {
	
	// Static block will get executed automatically without object - when the class gets Loaded.
	static {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	public static Connection getConnection() throws SQLException {
		String url = "jdbc:mysql://localhost:3306/jdbclearning";
		return DriverManager.getConnection(url, "root", "root"); // url, user, password
	}
	
	public static void closeConnection(Statement statement, Connection connect) throws SQLException {
		statement.close();
		connect.close();
	}

}
