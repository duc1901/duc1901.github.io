package vn.t3h.ls5;

import java.util.ArrayList;
import java.util.List;

public class BaiTap2 {
	public static void main(String[] args) {
		var menuLinhVuc = new Menu(10, "Lĩnh vực", 0);
		var menuNhaHang = new Menu(11, "Nhà hàng", 10);
		var menuKinhDoanh = new Menu(12, "Kinh doanh", 10);
		var menuDuLich = new Menu(12, "Du lịch", 10);
		
		var menuTinTuc = new Menu(20, "Tin tức", 0);
		var menuKyThuatIn = new Menu(24, "Kỹ thuật in", 20);
		var menuDoHoa = new Menu(24, "Đồ hoạ", 20);
		var menuMyThuat = new Menu(25, "Mỹ thuật", 20);
		
		var listMenus = new ArrayList<Menu>();
		listMenus.add(menuLinhVuc);
		listMenus.add(menuNhaHang);
		listMenus.add(menuKinhDoanh);
		listMenus.add(menuMyThuat);
		listMenus.add(menuDoHoa);
		listMenus.add(menuDuLich);
		listMenus.add(menuTinTuc);
		listMenus.add(menuKyThuatIn);
		
		var listMenu = arrayDataMenuWithIndent(listMenus, 0, "");
		for(Menu mn:listMenu) {
			System.out.println("menu name: " + mn.name);
		}
	}
	
	public static ArrayList<Menu> menuWithIndent = new ArrayList<Menu>();
	public static List<Menu> arrayDataMenuWithIndent(ArrayList<Menu> lists, int parentId, String indent) {
		for(Menu menu:lists) {
			Menu menuTmp = new Menu();
			if(menu.parentId != parentId) {
				continue;
			}
			menuTmp.id = menu.id;
			menuTmp.name = indent + menu.name;
			menuTmp.parentId = menu.parentId;
			menuWithIndent.add(menuTmp);
			
			arrayDataMenuWithIndent(lists, menu.id, "--");
		}
		return menuWithIndent;
	}
}
