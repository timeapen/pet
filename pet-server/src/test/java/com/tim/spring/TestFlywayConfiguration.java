package com.tim.spring;

import javax.sql.DataSource;

import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.flyway.FlywayMigrationInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TestFlywayConfiguration {
	
	@Autowired
	private DataSource dataSource;
	
	@Bean
	public Flyway flyway() {
		Flyway flyway = new Flyway();
		flyway.setDataSource(dataSource);
		flyway.setLocations("filesystem:src/test/resources/db/migration");
		return flyway;
	}
	
	@Bean
	public FlywayMigrationInitializer initFlyway() {
		return new FlywayMigrationInitializer(flyway());
	}
	
}
