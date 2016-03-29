package com.tim.pet.dao.repo;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.List;

import javax.transaction.Transactional;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

import com.tim.pet.dao.entity.Pet;
import com.tim.spring.PersistenceConfiguration;
import com.tim.spring.TestDataSourceConfiguration;
import com.tim.spring.TestFlywayConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
    TransactionalTestExecutionListener.class})
@SpringApplicationConfiguration(classes = {TestDataSourceConfiguration.class, PersistenceConfiguration.class, TestFlywayConfiguration.class})
@Transactional
public class PetRepositoryIT {
	
	@Autowired
	private PetRepository fixture;

	@Test
	public void testSavePet() {
		Iterable<Pet> pets = fixture.findAll();
		assertFalse(pets.iterator().hasNext());
		
		Pet pet = buildPet("Oliver", "Domestic Shorthair");
		
		assertNull(pet.getId());
		fixture.save(pet);
		assertNotNull(pet.getId());
		
		Pet foundPet = fixture.findOne(pet.getId());
		assertThat(foundPet.getName(), is("Oliver"));
		assertThat(foundPet.getDescription(), is("Domestic Shorthair"));
	}
	
	@Test
	public void testDeletePet() {
		Iterable<Pet> pets = fixture.findAll();
		assertFalse(pets.iterator().hasNext());
		
		Pet pet = buildPet("Oliver", "Domestic Shorthair");
		
		fixture.save(pet);
		
		Pet foundPet = fixture.findOne(pet.getId());
		
		assertNotNull(foundPet);
		
		fixture.delete(pet.getId());
		
		foundPet = fixture.findOne(pet.getId());
		
		Assert.assertNull(foundPet);
	}

	private Pet buildPet(String name, String description) {
		Pet pet = new Pet();
		pet.setName(name);
		pet.setDescription(description);
		return pet;
	}
	
	@Test
	public void testFindByName() {
		List<Pet> olivers = fixture.findByName("Oliver");
		assertTrue(olivers.isEmpty());
		
		Pet oliver = buildPet("Oliver", "Domestic Shorthair");
		Pet santo = buildPet("Santo", "Domestic Longhair");
		Pet santo2 = buildPet("Santo", "Domestic Longhair");
		Pet tim = buildPet("Tim", "Maine Coone");
		Pet tim2 = buildPet("Tim", "Maine Coone");
		Pet tim3 = buildPet("Tim", "Maine Coone");
		fixture.save(Arrays.asList(oliver, santo, santo2, tim, tim2, tim3));
		
		doAssertPets(fixture.findByName("Oliver"), 1, "Domestic Shorthair");
		doAssertPets(fixture.findByName("Santo"), 2, "Domestic Longhair");
		doAssertPets(fixture.findByName("Tim"), 3, "Maine Coone");
	}

	private void doAssertPets(List<Pet> pets, int expectedSize, String expectedDescription) {
		assertThat(pets.size(), is(expectedSize));
		assertThat(pets.get(0).getDescription(), is(expectedDescription));
	}

}
