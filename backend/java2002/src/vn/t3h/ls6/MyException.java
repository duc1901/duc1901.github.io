package vn.t3h.ls6;

import java.util.ArrayList;

public class MyException {
	public static void main(String[] args) {
		var data = testEx();
		System.out.print("data: " + data);
	}
	
	public static String testEx() {
		var arrayList = new ArrayList<String>();
		arrayList.add("NoEx");
		try {
			var data = arrayList.get(0);
			if(data == "NoEx") {
				throw new CustomException("Lỗi của bạn định nghĩa");
			}
		} catch (Exception ex) {
			System.out.println("Exception: " + ex.getMessage());
			return "data in exp";
		}
		return null;
	}
}
