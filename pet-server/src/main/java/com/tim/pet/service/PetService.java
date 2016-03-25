package com.tim.pet.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tim.pet.dao.entity.Pet;
import com.tim.pet.dao.repo.PetRepository;

@Service
@Transactional
public class PetService {
	
	@Autowired
	private PetRepository petRepo;
	
	public Iterable<Pet> getAllPets() {
		return petRepo.findAll();
	}

}
