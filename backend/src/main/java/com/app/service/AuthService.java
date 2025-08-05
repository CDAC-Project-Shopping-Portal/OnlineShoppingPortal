package com.app.service;

import com.app.security.request.SignUpRequest;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    ResponseEntity<?> registerUser(SignUpRequest signUpRequest);
}
