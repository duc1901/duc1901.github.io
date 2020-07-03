package vn.t3h.java;

import java.util.Scanner;

public class BaiTapLs2_1 {
	public static void main( String[] args) {
		Scanner sc = new Scanner(System.in);
		float n, sum = 0;
		do {
			System.out.println("Nhập số:");
			n = sc.nextFloat();
			sum += n;
			if (sum > 100f) {
				break;
			}
		} while (n < 100f);
		System.out.println("Tổng là: " + sum);
	}
}
