package com.beniel.jdbclearning.withexceptionhandling;

import java.sql.*;

public class LaunchApp9_SELECTINGusingPreparedStatement {
public static void main(String[] args) {
		
		Connection connect = null;
		PreparedStatement prepStatement = null;
		ResultSet rs = null;
		
		try {
			connect = JDBCUtil.getConnection();
			
			String query = "SELECT * FROM studentinfo";
			prepStatement = connect.prepareStatement(query);
			
			rs = prepStatement.executeQuery();
			
			while(rs.next()) {
				System.out.println(
						rs.getInt(1) + " | " + rs.getString(2) + " | " +
						rs.getInt(3) + " | " + rs.getString(4)
				);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				JDBCUtil.closeConnection(prepStatement, connect);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
	}
}
