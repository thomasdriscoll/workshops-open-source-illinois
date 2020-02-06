// Code from : http://programmingbydoing.com/a/bmi-calculator.html
import java.util.Scanner;
import java.lang.Math;

public class BMICalc{
    public static void main(String[] args){
        Scanner keyboard = new Scanner(System.in);

        double weightLb, weight, height, bmi;
        int heightFeet, heightInch;

        System.out.print("Your height (feet only): ");
        heightFeet = keyboard.nextInt();

        System.out.print("Your height (inches): ");
        heightInch = keyboard.nextInt();

        height = (heightFeet*12 + heightInch) * 0.0254;

        System.out.print("Your weight in lb: ");
        weightLb = keyboard.nextDouble();

        weight = weightLb * 0.453592;

        bmi = weight / Math.sqrt(height);

        System.out.println("Your BMI is "+bmi);
    }
}