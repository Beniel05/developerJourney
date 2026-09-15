package com.beniel.jdbc.crud;

import java.sql.*;
import java.util.Scanner;

public class StudentDAO {

    public static void main(String[] args) {

        Connection connect = null;
        Scanner sc = null;

        try {

            connect = JDBCUtil.getConnection();
            sc = new Scanner(System.in);

            getAllStudents(connect);
            selectStudent(connect, sc);
            insertStudent(connect, sc);
            updateStudent(connect, sc);
            deleteStudent(connect, sc);

        } catch (SQLException e) {

            e.printStackTrace();

        } finally {

            try {

                if (connect != null) connect.close();
                if (sc != null) sc.close();

            } catch (SQLException e) {

                e.printStackTrace();

            }
        }
    }

    public static void getAllStudents(Connection connect) {

        Statement statement = null;
        ResultSet resultSet = null;

        try {

            System.out.println("\n====================");

            statement = connect.createStatement();

            String query = "SELECT * FROM studentinfo";

            resultSet = statement.executeQuery(query);

            while (resultSet.next()) {

                System.out.println(
                        resultSet.getInt(1) + " | " +
                        resultSet.getString(2) + " | " +
                        resultSet.getInt(3) + " | " +
                        resultSet.getString(4)
                );
            }

            System.out.println("Students retrieved successfully.");
            System.out.println("====================\n");

        } catch (SQLException e) {

            e.printStackTrace();

        } finally {

            try {

                if (resultSet != null) resultSet.close();
                if (statement != null) statement.close();

            } catch (SQLException e) {

                e.printStackTrace();

            }
        }
    }

    public static void selectStudent(Connection connect, Scanner sc) {

        PreparedStatement prepStatement = null;
        ResultSet resultSet = null;

        try {

            System.out.println("\n====================");

            String query = "SELECT * FROM studentinfo WHERE id = ?";

            prepStatement = connect.prepareStatement(query);

            System.out.print("Enter ID of the student to get selected: ");

            int id = sc.nextInt();

            prepStatement.setInt(1, id);

            resultSet = prepStatement.executeQuery();

            if (resultSet.next()) {

                System.out.println(
                        resultSet.getInt(1) + " | " +
                        resultSet.getString(2) + " | " +
                        resultSet.getInt(3) + " | " +
                        resultSet.getString(4)
                );

                System.out.println("Student retrieved successfully.");

            } else {

                System.out.println("Student not found.");

            }

            System.out.println("====================\n");

        } catch (SQLException e) {

            e.printStackTrace();

        } finally {

            try {

                if (resultSet != null) resultSet.close();
                if (prepStatement != null) prepStatement.close();

            } catch (SQLException e) {

                e.printStackTrace();

            }
        }
    }

    public static void insertStudent(Connection connect, Scanner sc) {

        PreparedStatement prepStatement = null;

        try {

            System.out.println("\n====================");

            String query = "INSERT INTO studentinfo(id, sname, sage, scity) VALUES (?, ?, ?, ?)";

            prepStatement = connect.prepareStatement(query);

            System.out.print("Enter ID: ");
            prepStatement.setInt(1, sc.nextInt());

            System.out.print("Enter Name: ");
            prepStatement.setString(2, sc.next());

            System.out.print("Enter Age: ");
            prepStatement.setInt(3, sc.nextInt());

            System.out.print("Enter City: ");
            prepStatement.setString(4, sc.next());

            int rows = prepStatement.executeUpdate();

            System.out.println(rows + " student inserted successfully.");

            System.out.println("====================\n");

        } catch (SQLException e) {

            e.printStackTrace();

        } finally {

            try {

                if (prepStatement != null) prepStatement.close();

            } catch (SQLException e) {

                e.printStackTrace();

            }
        }
    }

    public static void updateStudent(Connection connect, Scanner sc) {

        PreparedStatement prepStatement = null;

        try {

            System.out.println("\n====================");

            String query = "UPDATE studentinfo SET sname = ?, sage = ?, scity = ? WHERE id = ?";

            prepStatement = connect.prepareStatement(query);

            System.out.print("Enter Student ID to update: ");

            int id = sc.nextInt();

            System.out.print("Enter New Name: ");
            prepStatement.setString(1, sc.next());

            System.out.print("Enter New Age: ");
            prepStatement.setInt(2, sc.nextInt());

            System.out.print("Enter New City: ");
            prepStatement.setString(3, sc.next());

            prepStatement.setInt(4, id);

            int rows = prepStatement.executeUpdate();

            System.out.println(rows + " student updated successfully.");

            System.out.println("====================\n");

        } catch (SQLException e) {

            e.printStackTrace();

        } finally {

            try {

                if (prepStatement != null) prepStatement.close();

            } catch (SQLException e) {

                e.printStackTrace();

            }
        }
    }

    public static void deleteStudent(Connection connect, Scanner sc) {

        PreparedStatement prepStatement = null;

        try {

            System.out.println("\n====================");

            String query = "DELETE FROM studentinfo WHERE id = ?";

            prepStatement = connect.prepareStatement(query);

            System.out.print("Enter Student ID to delete: ");

            int id = sc.nextInt();

            prepStatement.setInt(1, id);

            int rows = prepStatement.executeUpdate();

            System.out.println(rows + " student deleted successfully.");

            System.out.println("====================\n");

        } catch (SQLException e) {

            e.printStackTrace();

        } finally {

            try {

                if (prepStatement != null) prepStatement.close();

            } catch (SQLException e) {

                e.printStackTrace();

            }
        }
    }
}