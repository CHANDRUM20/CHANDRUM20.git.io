package com.online.picture.management.client.models;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class UserModel {
@Id
private String email;
private String password;
private String username;
private String mobilenumber;
private boolean active;
private String role;
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getUsername() {
	return username;
}	
public void setUsername(String username) {
	this.username= username;
}
public String getMobilenumber() {
	return mobilenumber;
}
public void setMobilenumber(String mobilenumber) {
	this.mobilenumber=mobilenumber;
}
public Boolean getActive() {
	return active;
}
public void setActive(boolean active) {
	this.active=active;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role=role;
}
}