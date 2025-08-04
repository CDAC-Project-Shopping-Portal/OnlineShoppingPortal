package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

	@Query("SELECT p FROM Product p " +
		       "WHERE (p.category.categoryName = :category OR :category ='') " +
		       "AND (p.discountedPrice BETWEEN :minPrice AND :maxPrice) " +
		       "AND ( p.discountPercent >= :minDiscount) " +
		       "ORDER BY p.discountedPrice ASC")
		List<Product> filterProducts(
		        @Param("category") String category,
		        @Param("minPrice") Integer minPrice, 
		        @Param("maxPrice") Integer maxPrice,
		        @Param("minDiscount") Integer minDiscount);
}
