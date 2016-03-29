package com.tim.pet.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tim.pet.dao.entity.Pet;
import com.tim.pet.dao.repo.PetRepository;
import com.tim.pet.service.IPetService;

@Service
@Transactional
public class PetServiceImpl implements IPetService {
	
	@Autowired
	private PetRepository petRepo;

	@Override
	public Iterable<Pet> getAllPets() {
		return petRepo.findAll();
	}

	@Override
	public Pet getPet(Long id) {
		return petRepo.findOne(id);
	}
	
	@Override
	public Long addPet(Pet pet) {
		Pet savedPet = petRepo.save(pet);
		return savedPet.getId();
	}

	@Override
	public void deletePet(Long id) {
		petRepo.delete(id);
	}

}
