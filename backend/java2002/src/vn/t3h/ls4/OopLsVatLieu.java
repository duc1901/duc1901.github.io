package vn.t3h.ls4;

public class OopLsVatLieu {
	protected String vatlieu;
	private int dinhLuong;
	
	public void setVatLieu(String vatlieu) {
		this.vatlieu = vatlieu;
	}
	
	private void setDinhLuong(int dinhluong) {
		this.dinhLuong = dinhluong;
	}
	
	public String getVatLieu() {
		return this.vatlieu;
	}
	
	private int getDinhLuong() {
		return this.dinhLuong;
	}
}
