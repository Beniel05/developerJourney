class _01_Calculator {
    int num1;
    int num2;
    public int add(int num1, int num2) {
        this.num1 = num1;
        this.num2 = num2;
        return num1 + num2;
    }
}

public class _01_ClassAndObject {
    public static void main(String args[])  {
        
        _01_Calculator calc = new _01_Calculator();

        int result = calc.add(10, 20);
        System.out.println("Result: " + result);

    }
}
