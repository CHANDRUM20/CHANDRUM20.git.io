package com.online.picture.management.client.models;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class ImageModel {
@Id
private String imageId;
private String imageName;
private String image;
private String imageTag;
private String comments;
public String getImageId() {
	return imageId;
}
public void setImageid(String imageid) {
	this.imageId = imageid;
}
public String getImagename() {
	return imageName;
}
public void setImageName(String imageName) {
	this.imageName = imageName;
}
public String getImage() {
	return image;
}	
public void setimage(String image) {
	this.image= image;
}
public String getimageTag() {
	return imageTag;
}
public void setImageTag(String imageTag) {
	this.imageTag=imageTag;
}
public String getterComments(String comments ) {
	return this.comments;
}
public void setterComments(String comments) {
	this.comments=comments;
}
}
