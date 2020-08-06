package vn.t3h.ls7;

import java.io.File;
import java.time.LocalDate;

public class WriteUtils {
	private boolean isAppend = false;
	private String path;
	
	public static WriteUtils createFolder(String dir) throws Exception {
		var wUtils = new WriteUtils();
		if(dir == null || dir.isEmpty())
			throw new Exception("Thư mục tạo không được rỗng");
		LocalDate ldate = LocalDate.now();
		String path = System.getProperty("user.dir") + dir + "/" + ldate.getMonth().getValue() + ldate.getYear();
		
		File file = new File(path);
		if(!file.exists()) {
			file.mkdirs();
		}
		wUtils.path = path;
		return wUtils;
	}
	

	
	public String getPath() {
		return this.path;
	}



	public WriteUtils isAppend(boolean b) {
		// TODO Auto-generated method stub
		return null;
	}
}


