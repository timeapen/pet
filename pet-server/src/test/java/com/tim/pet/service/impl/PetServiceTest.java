package com.tim.pet.service.impl;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import com.tim.pet.dao.entity.Pet;
import com.tim.pet.dao.repo.PetRepository;

@RunWith(MockitoJUnitRunner.class)
public class PetServiceTest {
	
	@Mock
	private PetRepository petRepository;
	
	@InjectMocks
	private PetServiceImpl fixture;

	@Test
	public void testFindAllPets() {
		List<Pet> pets = new ArrayList<>();
		pets.add(createPet(1L, "Oliver", "DSH"));
		when(petRepository.findAll()).thenReturn(pets);
		Iterable<Pet> allPets = fixture.getAllPets();
		
		Iterator<Pet> allPetsIt = allPets.iterator();
		assertTrue(allPetsIt.hasNext());
		
		Pet pet = allPetsIt.next();
		assertThat(pet.getId(), is(1L));
		assertThat(pet.getName(), is("Oliver"));
		assertThat(pet.getDescription(), is("DSH"));
		
		assertFalse(allPetsIt.hasNext());
	}
	
	@Test
	public void testGetPet() {
		when(petRepository.findOne(1L)).thenReturn(createPet(1L, "Blackie", "The Dog"));
		
		assertNotNull(fixture.getPet(1L));
		assertNull(fixture.getPet(2L));
	}
	
	@Test
	public void testDeletePet() {
		fixture.deletePet(1L);
		verify(petRepository, Mockito.times(1)).delete(1L);
	}
	
	@Test
	public void testAddPet() {
		Pet pet = createPet(1L, "Blackie", "The Dog");
		when(petRepository.save(pet)).thenReturn(pet);
		
		Long petId = fixture.addPet(pet);
		
		assertThat(petId, is(1L));
	}

	private Pet createPet(long id, String name, String description) {
		Pet pet = new Pet();
		pet.setId(id);
		pet.setName(name);
		pet.setDescription(description);
		return pet;
	}

}
