package com.tim.pet.service;

import com.tim.pet.dao.entity.Pet;

public interface IPetService {

	Iterable<Pet> getAllPets();

	Pet getPet(Long id);

	Long addPet(Pet pet);

	void deletePet(Long id);

}
