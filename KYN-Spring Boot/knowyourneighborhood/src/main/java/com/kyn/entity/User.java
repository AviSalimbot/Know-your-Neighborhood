package com.kyn.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	 	@Id
	    @GeneratedValue(strategy= GenerationType.IDENTITY)
	    private Long id;

	 	@Column(name="first_name")
	    private String firstName;
	    
	 	@Column(name="last_name")
	    private String lastName;

	    @Column(name="user_name")
	    private String userName;
	    
	    private String password;
	    
	    private String email;
	    
	    private String phoneNumber;
	    
	    private String address;

	    public User() {}
	    
		public User(Long id, String firstName, String lastName, String userName, String password, String email, String phoneNumber,
				String address) {
			super();
			this.id = id;
			this.firstName=firstName;
	   	 	this.lastName=lastName;
			this.userName = userName;
			this.password = password;
			this.email = email;
			this.phoneNumber = phoneNumber;
			this.address = address;
		}

		public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		
		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getUserName() {
	        return userName;
	    }

	    public void setUserName(String userName) {
	        this.userName = userName;
	    }

	    public String getPassword() {
	        return password;
	    }

	    public void setPassword(String password) {
	        this.password = password;
	    }

	    public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}
		

		public String getPhoneNumber() {
			return phoneNumber;
		}

		public void setPhoneNumber(String phoneNumber) {
			this.phoneNumber = phoneNumber;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}
		
		@Override
		public String toString() {
			return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", userName=" + userName + ", password=" + password +
					", email=" + email + ", mobile=" + phoneNumber + ", address=" + address + "]";
		}

}
