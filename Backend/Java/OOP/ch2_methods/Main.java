class Computer {
    public void playMusic() {
        System.out.println("Music is playing...");
    }
    public String getMeAPen(int price) {
        if(price < 5) {
            return "We don't have a Pen priced less than 5rs";
        }
        return "Here is your PEN.";
    }
}

public class Main {
    public static void main(String[] args) {
        Computer computer = new Computer();
        computer.playMusic();
        
        String result1 = computer.getMeAPen(4);
        String result2 = computer.getMeAPen(10);
        System.out.println(result1);
        System.out.println(result2);
    }
}
