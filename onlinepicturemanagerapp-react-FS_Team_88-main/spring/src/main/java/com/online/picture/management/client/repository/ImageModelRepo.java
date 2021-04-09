package com.online.picture.management.client.repository;

import org.springframework.data.repository.CrudRepository;

import com.online.picture.management.client.models.ImageModel;

public interface ImageModelRepo extends CrudRepository<ImageModel, String> {

}
