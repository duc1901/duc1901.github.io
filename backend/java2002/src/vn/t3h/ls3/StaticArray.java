package vn.t3h.ls3;

import java.util.Arrays;

public class StaticArray {
	public static void main (String[] args) {
		//creatArray();
		//copyArray();
		//timSoKhuyet();
		//soSanh2Array();
		//timMaxMin();
	}
	
	static int min;
	static int max;
	public static void timMaxMin() {
		int[] arr1 = {1,2,3,4,1,5,6,7,8,9,100,200};
		max = arr1[0];
		min = arr1[0];
		for(int i = 1; i < arr1.length; i++) {
			if(arr1[i] > max ) {
				max = arr1[i];
			}
			if(arr1[i] < min ) {
				min = arr1[i];
			}
		}
		System.out.println("max la: " + max);
		System.out.println("min la: " + min);
	}
	
	public static void soSanh2Array() {
		int[] arr1 = {1,2,3,4,5,6,8,9,10};
		int[] arr2 = {1,2,3,4,5,6,8,9,11};
		int[] arr3 = {1,2,3,4,5,6,8,9,10};
		startSoSanh(arr1, arr2);
		startSoSanh(arr1, arr3);
	}
	
	public static void startSoSanh(int[] arr1, int[] arr2) {
		if(arr1.length != arr2.length) {
			System.out.println("2 Array khong bang nhau");
			return;
		} else {
			for (int i = 0; i < arr1.length; i++) {
				if(arr1[i] != arr2[i]) {
					System.out.println("2 Array khong bang nhau");
					return;
				}
			}
		}
		System.out.println("2 Array bang nhau");
	}
	
	public static void timSoKhuyet() {
		int[] arr = {1,2,3,4,5,6,8,9,10,11,12,13,14,15};
		int tongSoTuNhien = 15 * (15 + 1) / 2;
		int tongPhanTuTrongMang = 0;
		for(int j = 0; j < arr.length; j++) {
			tongPhanTuTrongMang += arr[j];
		}
		int soKhuyet = tongSoTuNhien - tongPhanTuTrongMang;
		System.out.println("So khuyet = " + soKhuyet);
	}
	
	public static void copyArray() {
		int[] arr1 = {1,120,100,30,50};
		int[] arr2 = new int[arr1.length];
		for(int i = 0; i < arr1.length; i++) {
			arr2[i] = arr1[i];
		}
		System.out.println("arr1 = " + Arrays.toString(arr1));
		System.out.println("arr2 = " + Arrays.toString(arr2));
	}
	
	public static void creatArray() {
		int[] arr1 = {1,120,100,30,50};
		System.out.println(" In mang da tao: " + Arrays.toString(arr1));
		System.out.println("In ra vi tri dau mang: " + arr1[0] + ", Vi tri cuoi mang: " + arr1[4]);
	}
}
