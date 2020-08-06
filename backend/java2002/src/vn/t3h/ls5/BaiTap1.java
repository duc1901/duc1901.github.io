package vn.t3h.ls5;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class BaiTap1 {
	private static final int RECORDS = 200000;
	public static void main(String[] args) {
		List<String> arrayLists = new ArrayList<String>();
		List<String> linkedLists = new LinkedList<String>();
		long start = System.currentTimeMillis();
		for(int i = 0; i <= RECORDS; i++) {
			arrayLists.add("Record #" + i);
		}
		long totalTimesForAddList = System.currentTimeMillis() - start;
		System.out.println("Tong thoi gian add 20k record: " + totalTimesForAddList);
		
		start = System.currentTimeMillis();
		for(int i = 0; i <= RECORDS; i++) {
			linkedLists.add("Record #" + i);
		}
		long totalTimesForAddLinked = System.currentTimeMillis() - start;
		System.out.println("Tong thoi gian add 20k record: " + totalTimesForAddLinked);
		
		// sua data trong array va linked
		
		// sua cho array
		
		long timesStartForEditArray = System.currentTimeMillis();
		for(int i = 0; i <= RECORDS; i++) {
			arrayLists.set(i, "EDIT #" + i);
		}
		long totalTimesForEditList = System.currentTimeMillis() - timesStartForEditArray;
		System.out.println("Tong thoi gian sua " + RECORDS + " record array: " + totalTimesForEditList);
		
		// Sua cho Linked
		
		long timesStartForEditLinked = System.currentTimeMillis();
		for(int i = 0; i <= RECORDS; i++) {
			linkedLists.set(i, "EDIT #" + i);
		}
		long totalTimesForEditLinked = System.currentTimeMillis() - timesStartForEditLinked;
		System.out.println("Tong thoi gian sua " + RECORDS + " record linked: " + totalTimesForEditLinked);
		
		// Remove data trong array va linked
		
		// xoa cho array
		long timesStartForRemoveArray = System.currentTimeMillis();
		for(int i = 0; i < RECORDS; i++) {
			arrayLists.remove(0);
		}
		long totalTimesForRemoveList = System.currentTimeMillis() - timesStartForRemoveArray;
		System.out.println("Tong thoi gian xoa " + RECORDS + " record array: " + totalTimesForRemoveList);
		
		// xoa cho linked
		long timesStartForRemoveLinked = System.currentTimeMillis();
		for(int i = 0; i < RECORDS; i++) {
			linkedLists.remove(0);
		}
		long totalTimesForRemoveLinked = System.currentTimeMillis() - timesStartForRemoveLinked;
		System.out.println("Tong thoi gian xoa " + RECORDS + " record linked: " + totalTimesForRemoveLinked);
	}
}
