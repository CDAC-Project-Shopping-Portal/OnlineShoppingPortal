package com.app.service;

import com.app.dtos.AddItemRequest;
import com.app.dtos.CartDTO;
import com.app.pojos.Cart;
import com.app.pojos.User;

import jakarta.transaction.Transactional;

import java.util.List;

public interface CartService {
	public Cart createCart (User user);
    String addProductToCart(Long userId,AddItemRequest req);
    public String addCartItem(Long userId, AddItemRequest req) ;

//    List<CartDTO> getAllCarts();

    Cart getCart(String emailId, Long cartId);
//
    @Transactional
    String updateProductQuantityInCart(Long productId, Integer quantity);
//
//    String deleteProductFromCart(Long cartId, Long productId);
//
//    void updateProductInCarts(Long cartId, Long productId);

	void deleteCartItem(Long cartItemId);
}
