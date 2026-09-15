package com.beniel.jdbc.crud;

import java.sql.*;

public class JDBCUtil {
	static {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	public static Connection getConnection() throws SQLException {
		String url = "jdbc:mysql://localhost:3306/jdbclearning";
		String user = "root";
		String password = "root";
		return DriverManager.getConnection(url, user, password);
	}
	
	public static void closeConnection(ResultSet resultSet, Statement statement, Connection connect) throws SQLException {
		if(resultSet != null) resultSet.close();		
		if(statement != null) statement.close();
		if(connect != null) connect.close();
	}
	
}
