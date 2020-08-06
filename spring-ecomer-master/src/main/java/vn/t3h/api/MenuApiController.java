package vn.t3h.api;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import vn.t3h.model.Menu;
import vn.t3h.services.MenuService;

@RestController
@RequestMapping("/api")
public class MenuApiController {
	
	private Logger logger = LoggerFactory.getLogger(MenuApiController.class);
	private @Autowired MenuService mnService;
	
	@GetMapping(value="/menu")
	public List<Menu> listMenus() {
		return mnService.getMenu();
	}
	
	@PostMapping(value="/create-menu")
	public List<Menu> createMenu(@RequestBody Menu menu) {
		logger.info("menu lable: {}", menu.getLable());
		mnService.addMenu(menu);
		return mnService.getMenu();
	}
}
