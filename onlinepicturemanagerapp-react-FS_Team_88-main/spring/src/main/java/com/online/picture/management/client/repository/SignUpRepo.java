package com.online.picture.management.client.repository;

import org.springframework.data.repository.CrudRepository;

import com.online.picture.management.client.models.SignUp;

public interface SignUpRepo extends CrudRepository<SignUp, String> {

}
