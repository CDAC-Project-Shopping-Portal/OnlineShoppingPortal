package com.app.service;

import com.app.dtos.AddItemRequest;
import com.app.exception.ProductException;
import com.app.pojos.Cart;
import com.app.pojos.User;

import jakarta.transaction.Transactional;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);
	
	 String addProductToCart(Long userId,AddItemRequest req);
	 
	 Cart getCart(String emailId, Long cartId);
	 
	 @Transactional
	 String updateProductQuantityInCart(Long productId, Integer quantity);

	 void deleteCartItem(Long cartItemId);
}
