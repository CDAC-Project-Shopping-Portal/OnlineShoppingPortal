package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

//import com.app.config.JWTProvider;
import com.app.dtos.AuthResponse;
import com.app.exception.UserException;
import com.app.pojos.Cart;
import com.app.pojos.User;
import com.app.repository.UserRepository;
import com.app.service.CartService;
import com.app.service.CustomUserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping
public class AuthController {
	@Autowired
	private UserRepository userRepo;
//	@Autowired
//	private JWTProvider jwtProvider;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private CustomUserDetailsService customerUserDetailService;
	@Autowired
	private CartService cartService;
	
	@PostMapping("/signup")
		public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user) throws UserException{
		
		String email=user.getEmail();
		String password=user.getPassword();
		String firstName=user.getFirstName();
		String lastName=user.getLastName();
		
		User isEmailExist=userRepo.findByEmail(email).orElse(null);
		
		if(isEmailExist!=null) {
			throw new UserException("Email is Already used with Another Account");
		}
		User createdUser=new User();
		createdUser.setEmail(email);
		createdUser.setPassword(passwordEncoder.encode(password));
		createdUser.setFirstName(firstName);
		createdUser.setLastName(lastName);
		
		User savedUser=userRepo.save(createdUser);
		Cart cart=cartService.createCart(savedUser);
		
		Authentication authentication=new UsernamePasswordAuthenticationToken(savedUser.getEmail(),savedUser.getPassword());
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
//		String token = jwtProvider.generateToken(authentication);
		
		AuthResponse authResponse = new AuthResponse();
//		authResponse.setJwt(token);
		authResponse.setMessage("Signup Success");
		
		return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
		
	}
	
}
