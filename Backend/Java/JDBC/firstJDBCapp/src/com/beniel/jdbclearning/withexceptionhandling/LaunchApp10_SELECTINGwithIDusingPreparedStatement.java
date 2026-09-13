package com.beniel.jdbclearning.withexceptionhandling;

import java.sql.*;
import java.util.Scanner;

public class LaunchApp10_SELECTINGwithIDusingPreparedStatement {

	public static void main(String[] args) {

		Connection connect = null;
		PreparedStatement prepStatement = null;
		ResultSet rs = null;
		
		try {
			
			connect = JDBCUtil.getConnection();
			
			String query = "SELECT * FROM studentinfo WHERE id = ?";
			prepStatement = connect.prepareStatement(query);
			
			Scanner sc = new Scanner(System.in);
			System.out.println("Enter the ID to get viewed: ");
			int id = sc.nextInt();
			
			prepStatement.setInt(1, id);
			
			rs = prepStatement.executeQuery();
			
			if(rs.next()) {
				System.out.println(rs.getInt(1) + " " + rs.getString(2) + " " + rs.getInt(3) + " " + rs.getString(4));
			} else {
				System.out.println("There is no record with that ID." + id);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				rs.close();
				JDBCUtil.closeConnection(prepStatement, connect);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

	}

}
