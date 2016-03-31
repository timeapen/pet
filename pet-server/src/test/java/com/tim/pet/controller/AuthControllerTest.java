package com.tim.pet.controller;

import static com.jayway.restassured.RestAssured.*;
import static org.hamcrest.Matchers.is;

import org.apache.http.HttpStatus;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.jayway.restassured.RestAssured;
import com.tim.PetServerApplication;

@RunWith(SpringJUnit4ClassRunner.class) 
@SpringApplicationConfiguration(classes = PetServerApplication.class)
@WebAppConfiguration
@IntegrationTest("server.port:0") 
public class AuthControllerTest {
	
	@Value("${local.server.port}")
    int port;

	@Before
	public void setUp() {
		RestAssured.port = port;
	}
	
	@Test
	public void testUnauthenticatedUser() {
		given().
			auth().basic("bad", "user").
		when().
			get("user").
		then().
			statusCode(HttpStatus.SC_UNAUTHORIZED);
	}
	
	@Test
	public void testAuthenticatedUser() {
		given().
			auth().basic("santo", "baby").
		when().
			get("user").
		then().
			statusCode(HttpStatus.SC_OK).
			body("name", is("santo"));
	}

	@Test
	public void testSignOut() {
		given().
			auth().basic("santo", "baby").
		when().
			post("signout").
		then().
			statusCode(HttpStatus.SC_OK);
		
		when().
			get("user").
		then().
			statusCode(HttpStatus.SC_UNAUTHORIZED);

	}
}
