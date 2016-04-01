package com.tim;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(PetServerApplication.class)
@ActiveProfiles("test")
@WebIntegrationTest("server.port:0") 
public class PetServerApplicationTests {

	@Test
	public void contextLoads() {
	}

}
