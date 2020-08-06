package vn.t3h.ls5;

import java.util.ArrayList;
import java.util.Iterator;

public class ArrayLists {
	public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<String>();
		list.add("T3H_JAVA");
		list.add("T3H_JAVA_COLLECTIONS");
		list.add("REACT_JS");
		System.out.println("Kích thước của List: " + list.size());
		System.out.println("Giá trị trong list: " + list);
		System.out.println("Thêm một phần tử vào list: ");
		list.add("PHP");
		System.out.println(list);
		
		System.out.println("In ra phần tử đầu của list: " + list.get(0));
		System.out.println("Lấy hết các phần tử trong list: ");
		for(int i = 0; i < list.size(); i++) {
			System.out.println("In ra phần tử (" + (i+1) + ") của list" + list.get(i));
		}
		
		Iterator<String> it = list.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
	}
}
