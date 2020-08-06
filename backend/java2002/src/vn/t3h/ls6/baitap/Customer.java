package vn.t3h.ls6.baitap;

public class Customer {
	public String callId;
	public String name;
	public String callTime;
	public String musicName;
	
	public Customer(String callId, String name, String callTime, String musicName) {
		this.callId = callId;
		this.name = name;
		this.callTime = callTime;
		this.musicName = musicName;
	}
	
	public String toString() {
		return "callId=" + callId + ", name=" + name + ", callTime=" + callTime + ", musicName=" + musicName;
	}
	
	public String getMusicName() {
		return this.musicName;
	}
}
