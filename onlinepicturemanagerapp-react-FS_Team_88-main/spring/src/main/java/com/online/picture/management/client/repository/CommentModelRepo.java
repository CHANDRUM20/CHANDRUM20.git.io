package com.online.picture.management.client.repository;

import org.springframework.data.repository.CrudRepository;

import com.online.picture.management.client.models.CommentModel;

public interface CommentModelRepo extends CrudRepository<CommentModel, String> {

}
