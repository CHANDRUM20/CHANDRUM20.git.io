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

import com.online.picture.management.client.models.SignUp;
import com.online.picture.management.client.repository.SignUpRepo;

@RestController
@RequestMapping("/signup")
public class SignUpController {
	@Autowired
	SignUpRepo signUpRepo;	
	@ModelAttribute
	public void setResponseHeader(HttpServletResponse response) {
		response.setHeader("Cache-Control","no-cache");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Content-Type","application/json");
	}
@GetMapping("/getall")
public Iterable<SignUp> getAll() {
	return this.signUpRepo.findAll();
}
@GetMapping("/getbyemail")
public Optional<SignUp> getByEmail(String email){
	return this.signUpRepo.findById(email);
}
@PostMapping("/add")
public String add(@RequestBody SignUp signup) {
	this.signUpRepo.save(signup);
	return "added successful";
}
@PutMapping("/update")
public String update(@RequestBody SignUp signup) {
	this.signUpRepo.save(signup);
	return "SIGN UP DATA UPDATED SUCCESSFULL";
}
@DeleteMapping("/delete")
public String delete(String email) {
	this.signUpRepo.deleteById(email);
	return "SIGN UP DATA DELETED SUCCESSFULL";
}
}
