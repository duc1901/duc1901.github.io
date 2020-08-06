package vn.t3h.ls7;

import java.util.Iterator;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import vn.t3h.ls6.baitap.Customer;
import vn.t3h.ls6.baitap.QueueMain;;

// ghi du lieu trong queue vao file
public class BaiTap1 {
	public static void main(String[] args) throws Exception {
		var listInQueue =  QueueMain.createCustomer();
		System.out.println("listInQueue: " + listInQueue.size());
		JSONArray jArray = new JSONArray();
		Iterator<Customer> its = (Iterator<Customer>) listInQueue.iterator();
		while(its.hasNext()) {
			var customer = its.next();
			JSONObject jObj = new JSONObject();
			jObj.put("callId", customer.callId);
			jObj.put("name", customer.name);
			jObj.put("callTime", customer.callTime);
			jObj.put("musicName", customer.musicName);
			jArray.add(jObj);
		}
		String path = WriteUtils.createFolder("json").isAppend(true).getPath();
		System.out.println("path: " + path);
	}
}
