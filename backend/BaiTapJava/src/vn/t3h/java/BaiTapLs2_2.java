package vn.t3h.java;

import java.util.Scanner;

public class BaiTapLs2_2 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Nhập số nguyên dương n: ");
		int n = sc.nextInt();
		System.out.println("Giai thừa của " + n + " là: " + tinhGiaiThua(n));
	}
	
	public static long tinhGiaiThua(int n) {
		long result = 1L;
		for (int i = 1; i <= n; ++i) {
			result *= i;
		}
		return result;
	}
}
