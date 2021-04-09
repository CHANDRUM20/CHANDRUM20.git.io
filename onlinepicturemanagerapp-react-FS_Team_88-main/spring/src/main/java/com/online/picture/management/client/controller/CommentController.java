package com.online.picture.management.client.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.online.picture.management.client.models.CommentModel;
import com.online.picture.management.client.repository.CommentModelRepo;


@RestController
@RequestMapping("/comment")
public class CommentController {
@Autowired
CommentModelRepo commentModelRepo;
@ModelAttribute
public void setResponseHeader(HttpServletResponse response) {
	response.setHeader("Cache-Control","no-cache");
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type","application/json");
}
@PostMapping("/add")
public boolean add( CommentModel commentmodel) {
	this.commentModelRepo.save(commentmodel);
	return true;
}
@DeleteMapping("/delete")
public String delete(String comment) {
	this.commentModelRepo.deleteById(comment);
	return "Comment deleted successfull";
}
@PutMapping("/update")
public String update( CommentModel commentmodel) {
	this.commentModelRepo.save(commentmodel);
	return "UPDATE SUCCESSFUL";
}
}
