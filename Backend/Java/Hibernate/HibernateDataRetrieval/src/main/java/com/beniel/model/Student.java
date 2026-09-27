package com.beniel.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "StudentTable")
public class Student {

    @Id
    @Column(name = "SID")
    private Integer id;

    @Column(name = "SNAME")
    private String sname;

    @Column(name = "SCITY")
    private String scity;

    public Student() {
        System.out.println("Zero Param constructor for Hibernate");
    }

    public Student(Integer id, String sname, String scity) {

        this.id = id;
        this.sname = sname;
        this.scity = scity;
    }

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
