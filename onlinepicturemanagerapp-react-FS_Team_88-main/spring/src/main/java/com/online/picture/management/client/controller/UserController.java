package com.online.picture.management.client.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.online.picture.management.client.models.UserModel;
import com.online.picture.management.client.repository.UserModelRepo;
@RestController
@RequestMapping("/user")
public class UserController {
		@Autowired
		UserModelRepo userModelRepo;
		@ModelAttribute
		public void setResponseHeader(HttpServletResponse response) {
			response.setHeader("Cache-Control","no-cache");
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Content-Type","application/json");
		}
	@GetMapping("/getall")
	public Iterable<UserModel> getAll() {
		return this.userModelRepo.findAll();
	}
	@GetMapping("/getbyuser")
	public Optional<UserModel> getByUserModel(String username){
		return this.userModelRepo.findById(username);
	}
	@PutMapping("/update")
	public String update(@RequestBody UserModel usermodel) {
	  this.userModelRepo.save(usermodel);
	  return "UPDATE SUCCESSFUL";
	}
	@PostMapping("/add")
	public boolean add(@RequestBody UserModel usermodel) {
		this.userModelRepo.save(usermodel);
		return true;
	}
	@DeleteMapping("/delete")
	public String delete(String username) {
		 this.userModelRepo.deleteById(username);
		 return "User deleted successfull";
	}
}
