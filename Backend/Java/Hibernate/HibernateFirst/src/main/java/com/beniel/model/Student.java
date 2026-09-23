package com.beniel.model;

// Imports JPA annotations used to map this Java class to a database table.
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


// Marks this class as a Hibernate/JPA Entity.
// Hibernate will treat objects of this class as database records. In other words:
// Java Object  <---------->  Database Row || Student object <----------> StudentTable row

// Specifies the database table to which this entity is mapped.
@Entity

// Without @Table, Hibernate can use the class name as the table name depending on the naming strategy.
// Here, we explicitly tell Hibernate: "Map this class to a table called StudentTable."
@Table(name = "StudentTable")

public class Student {


    // @Id marks this field as the PRIMARY KEY of the database table.
    // Database: SID -> PRIMARY KEY
    // Hibernate uses this field to uniquely identify each Student object.
    @Id

    // @Column maps this Java field to a specific database column.
    // Java field: id
    // Database column: SID
    @Column(name = "SID")
    private Integer id;

    // Maps the Java field 'sname' to the database column 'SNAME'.
    @Column(name = "SNAME")
    private String sname;

    // Maps the Java field 'scity' to the database column 'SCITY'.
    @Column(name = "SCITY")
    private String scity;


    // ZERO-PARAMETER / NO-ARGUMENT CONSTRUCTOR: Hibernate requires a no-argument constructor so that it can create an object of 
    // this class when retrieving data from the database.
    
    // For example, when Hibernate retrieves:
    // SID = 101
    // SNAME = "Beniel"
    // SCITY = "Chennai"
    //
    // Hibernate internally needs to create something similar to:
    // new Student();
    // and then populate the object's fields. herefore, this constructor is important for Hibernate.
    
    public Student() {
        System.out.println("Zero Param constructor for Hibernate");
    }


    // You can add parameterized constructors if you want to conveniently create Student objects yourself.
    // Example:
    // Student s = new Student(101, "Alice", "California");
    // BUT this constructor is NOT required by Hibernate. It is optional and is useful for application-side object creation.
    
    public Student(Integer id, String sname, String scity) {

        this.id = id;
        this.sname = sname;
        this.scity = scity;
    }


    // Getters, setters and toString()
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public String getScity() {
		return scity;
	}

	public void setScity(String scity) {
		this.scity = scity;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", sname=" + sname + ", scity=" + scity + "]";
	}
	
	
}
