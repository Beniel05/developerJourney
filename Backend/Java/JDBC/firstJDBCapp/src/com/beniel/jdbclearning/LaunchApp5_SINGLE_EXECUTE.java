package com.beniel.jdbclearning;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class LaunchApp5_SINGLE_EXECUTE {
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
        String query1 = "SELECT * FROM studentinfo";
        String query2 = "UPDATE studentinfo SET sage = 25 WHERE id = 1";
        
        boolean status = statement.execute(query1); 
        /* execute() will return 'true' if we perform SELECT (retrieving) operation.
           execute() will return 'false' for all other UPDATE, INSERT, DELETE operations. */
        
        // Process the response
        if(status) { // when status == true. So only SELECT;
        	ResultSet rows = statement.getResultSet();
        	while(rows.next()) {
        		System.out.println(
        				rows.getInt(1) + " " + rows.getString(2) + " " + rows.getInt(3)
        				+ " " + rows.getString(4)
        		);
        	}
        } else { // EXCEPT SELECT - so, no ResultSet
        	int rowsAffect = statement.getUpdateCount();
        	if(rowsAffect == 0) {
        		System.out.println("Operation failed");
        	} else {
        		System.out.println("Operation Successful.");
        	}
        }

        // Close all the resources
        statement.close();
        connect.close();
    }
}
