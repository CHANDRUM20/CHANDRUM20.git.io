package com.online.picture.management.client.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.online.picture.management.client.models.ImageModel;
import com.online.picture.management.client.repository.ImageModelRepo;

@RestController
@RequestMapping("/imagemodel")
public class ImageController {
	@Autowired
	ImageModelRepo imageModelRepo;
	@ModelAttribute
	public void setResponseHeader(HttpServletResponse response) {
		response.setHeader("Cache-Control","no-cache");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Content-Type","application/json");
	}
	@GetMapping("/getall")
	public Iterable<ImageModel> getAll() {
	return this.imageModelRepo.findAll();
}
	@GetMapping("/getbyimage")
	public Optional<ImageModel> getByImageModel(String image){
	return this.imageModelRepo.findById(image);
}
	@PostMapping("/add")
	public boolean add(@RequestBody ImageModel imagemodel) {
		this.imageModelRepo.save(imagemodel);
		return true;
		
}
	@PutMapping("/update")
	public String update(@RequestBody ImageModel imagemodel) {
		this.imageModelRepo.save(imagemodel);
		return "UPDATE SUCCESSFUL";
	}
}

