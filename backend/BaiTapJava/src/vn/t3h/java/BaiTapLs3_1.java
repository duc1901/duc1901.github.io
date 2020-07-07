package vn.t3h.java;

import java.util.Arrays;

public class BaiTapLs3_1 {
	public static void main(String[] args) {
		int[] array = {90,90,20,27,35,22,10,8,8};
		System.out.println("a) ");
		insertElement(array);
	}
	
	public static void insertElement(int[] array) {
		int position = 2;     
		for(int i = array.length-1; i > position; i--) {
			array[i] = array[i-1];
		}
		array[position] = 100;
		System.out.println("new array: "+Arrays.toString(array));
	}
}
