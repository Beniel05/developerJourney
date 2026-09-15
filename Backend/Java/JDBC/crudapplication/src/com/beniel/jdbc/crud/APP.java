package com.beniel.jdbc.crud;

import java.sql.*;
import java.util.Scanner;

public class APP {

    public static void main(String[] args) {

        Connection connect = null;
        Scanner sc = null;

        try {

            connect = JDBCUtil.getConnection();

            System.out.println("Welcome to JDBC CRUD App");

            sc = new Scanner(System.in);

            boolean running = true;

            while (running) {

                System.out.println("Enter your choice: ");
                System.out.println("1 - To View ALL student.");
                System.out.println("2 - To View A specific student.");
                System.out.println("3 - To INSERT a student.");
                System.out.println("4 - To UPDATE a student.");
                System.out.println("5 - To DELETE a student.");
                System.out.println("0 - To EXIT app.");

                int choice = sc.nextInt();

                switch (choice) {

                    case 0:
                        running = false;
                        break;

                    case 1:
                        StudentDAO.getAllStudents(connect);
                        break;

                    case 2:
                        StudentDAO.selectStudent(connect, sc);
                        break;

                    case 3:
                        StudentDAO.insertStudent(connect, sc);
                        break;

                    case 4:
                        StudentDAO.updateStudent(connect, sc);
                        break;

                    case 5:
                        StudentDAO.deleteStudent(connect, sc);
                        break;

                    default:
                        System.out.println(
                            "Invalid Choice. Try Entering 0 to 5 Integer values (0 / 1 / 2 / 3 / 4 / 5)"
                        );
                }
            }

        } catch (SQLException e) {

            e.printStackTrace();

        } finally {

            if (sc != null) {
                sc.close();
            }

            if (connect != null) {

                try {
                    connect.close();

                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}