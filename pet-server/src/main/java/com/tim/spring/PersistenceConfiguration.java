package com.tim.spring;

import java.util.Properties;

import javax.persistence.spi.PersistenceProvider;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = {"com.tim.pet.dao.repo"})
public class PersistenceConfiguration {
	
	@Autowired
	private DataSource dataSource;
	
	@Bean
	public JpaTransactionManager transactionManager() throws ClassNotFoundException {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
		return transactionManager;
	}
	
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() throws ClassNotFoundException {
		LocalContainerEntityManagerFactoryBean entityManagerFactory = new LocalContainerEntityManagerFactoryBean();
		entityManagerFactory.setDataSource(dataSource);
		entityManagerFactory.setPackagesToScan("com.tim.pet.dao.entity");
		entityManagerFactory.setPersistenceProviderClass(getPersistenceProvider());
		entityManagerFactory.setJpaProperties(entityManagerProperties());
		return entityManagerFactory;
	}
	
	private <T extends PersistenceProvider> Class<T> getPersistenceProvider() throws ClassNotFoundException {
		return (Class<T>) Class.forName("org.hibernate.jpa.HibernatePersistenceProvider");
	}

	private Properties entityManagerProperties() {
		Properties properties = new Properties();
		
		properties.put("hibernate.dialect", "org.hibernate.dialect.H2Dialect");
		properties.put("hibernate.ddl-auto", "validate");
		
		return properties;
	}

}
