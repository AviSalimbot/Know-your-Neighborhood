package com.kyn.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kyn.entity.User;
import com.kyn.repository.UserRepository;

@Service
@Transactional
public class UserService {
	@Autowired
	UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public void AddUser(User user) {
		String encryptedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		userRepository.save(user);
		System.out.println("User added");
	}

	public boolean validateUser(String email, String password) {
		if (password == null) {
	        return false;
	    }
		
		User user = userRepository.findByEmail(email);
		System.out.println(user.getPassword());
		if (user != null && passwordEncoder.matches(password,  user.getPassword())) {
			return true;
		}
			return false;
	}

	public User login(String email, String password) {
		User loggedUser = userRepository.login(email, password);
		return loggedUser;
	}

	public List<User> ShowUsers() {
		return userRepository.findAll();
	}
	
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

}
