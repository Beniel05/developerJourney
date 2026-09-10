package com.beniel.jdbclearning;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class LaunchApp4_DELETING {
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
        String query = "DELETE FROM studentinfo WHERE id = 2";
        int rowsAffected = statement.executeUpdate(query);

        // Process the response
        if(rowsAffected == 0) {
        	System.out.println("Deletion Failed.");
        } else {
        	System.out.println("Deleted Successfully.");
        }

        // Close all the resources
        statement.close();
        connect.close();
    }
}
