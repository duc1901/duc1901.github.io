package vn.t3h.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import vn.t3h.services.HomeService;

@Controller
public class HomeController {

	static final String VIEW_INDEX = "pages/index";
	
	@Autowired private HomeService homeService;

	@GetMapping(value = "")
	public String getHome(Model model) {
		model.addAttribute("str", "23232323");
		return VIEW_INDEX;
	}
	
//	@GetMapping(value = "/about")
//	public String about(Model model) {
//		model.addAttribute("str", "23232323");
//		return "pages/about";
//	}
}