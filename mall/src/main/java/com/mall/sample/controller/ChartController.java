package com.mall.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ChartController {

	@RequestMapping("/sample/chart")
	public String chartView() {
		
		
		return "/sample/chart";
	}
}
