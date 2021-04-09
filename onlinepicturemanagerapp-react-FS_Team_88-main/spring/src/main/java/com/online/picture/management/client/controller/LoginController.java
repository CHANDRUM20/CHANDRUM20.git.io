package com.online.picture.management.client.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.online.picture.management.client.models.SignUp;
import com.online.picture.management.client.repository.SignUpRepo;
@RestController
@RequestMapping("/login")
public class LoginController {
		@Autowired
		SignUpRepo signUpRepo;
		@ModelAttribute
		public void setResponseHeader(HttpServletResponse response) {
			response.setHeader("Cache-Control","no-cache");
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Content-Type","application/json");
		}
	@GetMapping("/getbyemail")
	public Iterable<SignUp> getbyAll() {
		return this.signUpRepo.findAll();
	}
	@GetMapping("/getall")
	public Iterable<SignUp> getAll() {
		return this.signUpRepo.findAll();
	}
	@PostMapping("/add")
	public boolean add(@RequestBody SignUp signup) {
		//this.signUpRepo.save(signup);
		return true;
	}
  }
