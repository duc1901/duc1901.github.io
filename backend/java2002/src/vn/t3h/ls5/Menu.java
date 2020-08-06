package vn.t3h.ls5;

public class Menu {
	public int id;
	public String name;
	public int parentId;
	
	public Menu() {
		
	}
	public Menu(int id, String name, int parentId) {
		this.id = id;
		this.name = name;
		this.parentId = parentId;
	}
}

