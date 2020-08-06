package vn.t3h.ls7;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class ReadFile {

	public static void main(String[] args) throws IOException {
		File file = new File("test.txt");
		InputStream ips = new FileInputStream(file);
		BufferedReader bf = new BufferedReader(new InputStreamReader(ips));
		String line;
		StringBuffer sb = new StringBuffer();
		while ((line = bf.readLine()) != null) {
			sb.append(line);
		}
		System.out.println("String in sb" + sb.toString());
	}
	
}
