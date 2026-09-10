package com.beniel.jdbclearning;

public class LauchClassForNameEx {
	public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException {
		
		// If we want to only Load the Class - and not want to create an Object
		Class.forName("com.beniel.jdbclearning.Demo");

		// Will Load the Class and Create an Object
//		Demo both = new Demo();
		// OR
//		Class.forName("com.beniel.jdbclearning.Demo").newInstance();
		
		
	}
}

class Demo {
	static {
		System.out.println("Static Block will get executed. When Class gets loaded.");
	}
	{
		System.out.println("Instance block will get executed when Object gets created.");
	}
}