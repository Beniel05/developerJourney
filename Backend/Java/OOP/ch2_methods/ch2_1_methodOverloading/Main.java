// Same method name - different parameters / different typed parameters.

class Calculator {
    public int add(int n1, int n2) {
        return n1 + n2;
    }
    public double add(double n1, int n2) {
        return n1 + n2;
    }
    public int add(int n1, int n2, int n3) {
        return n1 + n2 + n3;
    }
}

public class Main {
    public static void main(String[] args) {
        
        Calculator calc = new Calculator();
        int resultOfAdding_2Numbers = calc.add(10, 20);
        int resultOfAdding_3Numbers = calc.add(10, 20, 30);
        System.out.println("Result of adding 2 numbers: " + resultOfAdding_2Numbers);
        System.out.println("Result of adding 3 numbers: " + resultOfAdding_3Numbers);

    }
}
