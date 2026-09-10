package com.beniel.jdbclearning;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class LaunchApp3_SELECTING {
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
        String query = "SELECT * FROM studentinfo";
        ResultSet rows = statement.executeQuery(query);
        
        // Process the response
        while(rows.next()) {
        	System.out.println(
        			rows.getInt(1) + " | " + // 1st Column (1) - which is id = getInt
        			rows.getString(2) + " | " + // 2nd Column (2) - which is sname = getString
        			rows.getInt(3) + " | " + // 3rd Column (3) - which is sage = getInt
        			rows.getString(4) // 4th Column (4) - which is scity = getString
        	); 
        	
        	// We can also mention the COLUMN Name instead of Column Number.
//        	System.out.println(
//        			rows.getInt("id") + " " +  rows.getString("sname") + " " 
//        			+ rows.getInt("sage") + " " +  rows.getString("scity") 
//        	); 
        	// We can also store the values in variables and print them.
        }

        // Close all the resources
        rows.close();
        statement.close();
        connect.close();
    }
}
