package com.app.service;

import com.app.exception.UserException;
import com.app.pojos.User;

public interface UserService {
	public User findUserProfileByJwt(String jwt) throws UserException;

	public User findUserById(Long userId) throws UserException;
	

}
