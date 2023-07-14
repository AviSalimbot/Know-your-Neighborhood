package com.kyn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.kyn.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	@Query(value = "SELECT * FROM user WHERE email = :email",
			nativeQuery = true)
	public User findByEmail(@Param("email")String email); 
	
	@Query(value = "SELECT * FROM user WHERE email = :email AND password = :password",
			nativeQuery = true)
	public User login(@Param("email")String email, @Param("password")String password);
	
}

