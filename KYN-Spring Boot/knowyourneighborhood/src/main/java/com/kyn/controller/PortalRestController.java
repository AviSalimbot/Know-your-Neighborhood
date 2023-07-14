package com.kyn.controller;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.entity.User;
import com.kyn.service.UserService;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class PortalRestController {
	@Autowired
	UserService userService;
	
	@GetMapping("/user")
    public Principal getUser(final Principal user) {
        return user;
    }

// Register User
	
	@PostMapping(value = "/addUser")
	public String addUser(@RequestBody User user) 
	{	    	
		System.out.println(user.getFirstName()+ " " + user.getLastName());
		userService.AddUser(user);
		return "User Added";
	}
	
// Login User
	
	@PostMapping(value = "/stsLogin")
	public User onLogin(@RequestParam String email, @RequestParam String password) 
	{	  
		userService.login(email, password);
		if (userService.validateUser(email, password)) {
			User loggedUser = userService.findByEmail(email);
			return loggedUser;
		} else {
			return null;
		}
	}
	
// View All Users
	
	@GetMapping("/viewUsers")
	public List<User> viewUsers()
	{
		return userService.ShowUsers();
	}

}
