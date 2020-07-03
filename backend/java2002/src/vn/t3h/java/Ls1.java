package vn.t3h.java;

public class Ls1 {
//	public static void main(String[] args) {
//		var a = 100;
//		int b = 50;
//		int c = b - a;
//		System.out.println("bien a =" + a);
//		System.out.println("bien b =" + b);
//		System.out.println("bien c =" + c);
//		
//		Ls1 ls1 = new Ls1();
//		int ketqua = ls1.tinhTong(a, b);
//		System.out.println("ketqua: " + ketqua);
//	}
//	
//	public int tinhTong(int a, int b) {
//		return a + b;
//	}
	
    public static void printStars(final int n) {
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j <= i; ++j) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
