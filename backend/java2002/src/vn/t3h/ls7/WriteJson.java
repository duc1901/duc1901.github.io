package vn.t3h.ls7;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class WriteJson {

	public static void main(String[] args) {
		JSONObject jsonObj = new JSONObject();
		jsonObj.put("hoten", "Nguyen An");
		jsonObj.put("ngaySinh", "20/10/2010");
		jsonObj.put("gioiTinh", "Nu");
		String jsonToString = jsonObj.toJSONString();
		System.out.println("Json as string: " + jsonToString);
		WriteFile.toFile("tennv.json", jsonToString);
		
		JSONArray jArray = new JSONArray();
		jArray.add(jsonObj);
	}

}
