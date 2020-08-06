package vn.t3h.java;

import java.util.Arrays;
import java.util.HashSet;

public class BaiTapLs3_1 {
	public static void main(String[] args) {
		int[] array = {90,90,20,27,35,22,10,8,8};
		System.out.println("a) ");
		insertElement(array);
		System.out.println("b) ");
		removeDuplicateElement(array, array.length);
	}
		
	private static void insertElement(int[] array) {
		int position = 2;     
		for(int i = array.length - 1; i > position; i--) {
			array[i] = array[i - 1];
		}
		array[position] = 100;
		System.out.println("new array = " + Arrays.toString(array));
	}
	
	private static int removeDuplicateElement(int[] array, int length ) {
//		HashSet<Integer> set = new HashSet<Integer>();
//		for (int num : array) {
//		    set.add(num);
//		}
//		System.out.println("new array = " + set);
		if(array.length == 0 || array.length == 1) {
			return 0;
		}
		int j = 0;
		int[] tam = new int[length];
		for(int i = 0; i < length -1; i++) {
			if(array[i] != array[i+1]) {
				tam[j++] = array[i];
			}
		}
		tam[j++] = array[length-1];
		System.out.println(Arrays.toString(tam));
		return j;
	}
}
