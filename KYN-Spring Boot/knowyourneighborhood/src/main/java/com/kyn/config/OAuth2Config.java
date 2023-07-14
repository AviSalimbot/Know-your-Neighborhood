package com.kyn.config;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@EnableOAuth2Sso
@Configuration
public class OAuth2Config extends WebSecurityConfigurerAdapter {

	@Override
	public void configure(HttpSecurity http) throws Exception {
	    http
		    .csrf() .disable()
	    	.authorizeRequests()
	        .antMatchers("/**").permitAll()
	        .antMatchers("/","/login**","/webjars/**","/error**","/addUser**").permitAll()
	        .antMatchers("/api/public/**").permitAll()
	        .antMatchers("/api/private/**").authenticated()
	        .antMatchers("/style/**").permitAll()
	        .anyRequest().authenticated()
	        .and()
	        .logout()
	            .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
	            .logoutSuccessUrl("http://localhost:3000/login")
	            .invalidateHttpSession(true)
	            .clearAuthentication(true)
	            .deleteCookies("JSESSIONID")
	            .permitAll();
	}
}