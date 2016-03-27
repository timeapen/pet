package com.tim.spring;

import javax.sql.DataSource;

import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TestDataSourceConfiguration {
	
	@Bean
	public DataSource dataSource() {
		return DataSourceBuilder.create()
				.url("jdbc:h2:mem:petdb-test;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE")
				.username("sa")
				.driverClassName("org.h2.Driver")
				.build();
	}

}
