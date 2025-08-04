package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dtos.AddItemRequest;
import com.app.exception.ProductException;
import com.app.pojos.Cart;
import com.app.pojos.User;
import com.app.repository.CartRepository;

@Service
public class CartServiceImpl implements CartService{
	@Autowired
	private CartRepository cartRepo;
	@Autowired
	private CartItemService cartItemService;
	@Autowired
	private ProductService productService;
	@Override
	public Cart createCart(User user) {
		Cart cart = new Cart();
		cart.setUser(user);
		return cartRepo.save(cart);
	}
	@Override
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Cart findUserCart(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}
	
//	@Override
//	public String addCartItem(Long userId, AddItemRequest req) throws ProductException{
//		Cart cart=cartRepo.findByUserId(userId);
//		Product product=productService.findProductById(req.getProductId());
//		
//	}
	

}
