package com.beniel.jdbclearning.withexceptionhandling;

import java.sql.*;

public class LaunchApp8_DELETINGusingPreparedStatement {
	public static void main(String[] args) {
		
		Connection connect = null;
		PreparedStatement prepStatement = null;
		
		try {
			connect = JDBCUtil.getConnection();
			
			String query = "DELETE FROM studentinfo WHERE id = ?";
			prepStatement = connect.prepareStatement(query);

			int id = 3;
			prepStatement.setInt(1, id);
			
			int noOfRowsAffected = prepStatement.executeUpdate();
			
			if(noOfRowsAffected == 0) System.out.println("No changes.");
			else System.out.println("Deleted successfully.");
			
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
