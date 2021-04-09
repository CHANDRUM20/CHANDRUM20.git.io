package com.online.picture.management.client.models;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class CommentModel {
	@Id
	private String commentId;
	private String Comment;
	private String userId;
	public String getCommentId() {
		return commentId;
	}
	public void setcommentid(String commentid) {
		this.commentId = commentid;
	}
	public String getComment() {
		return Comment;
	}
	public void setComment(String comment) {
		this.Comment = comment;
	}
	public String getUserId() {
		return userId;
	}	
	public void setUserid(String userid) {
		this.userId= userid;
	}

}
