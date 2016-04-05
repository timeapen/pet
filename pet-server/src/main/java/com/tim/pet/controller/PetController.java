package com.tim.pet.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tim.pet.controller.request.AddPetRequest;
import com.tim.pet.dao.entity.Pet;
import com.tim.pet.service.IPetService;

@EnableAutoConfiguration
@Controller
public class PetController {
	
	public static final Logger LOGGER = LoggerFactory.getLogger(PetController.class);
	
	@Autowired
	private IPetService petService;
	
	@RequestMapping(path="/pet", method=RequestMethod.GET)
	@ResponseBody
	public Iterable<Pet> getPets() {
		Iterable<Pet> allPets = petService.getAllPets();
		LOGGER.info("Retrieveing all pets: {}", allPets);
		return allPets;
	}
	
	@RequestMapping(path="/pet/{id}", method=RequestMethod.GET)
	@ResponseBody
	public Pet getPet(@PathVariable Long id) {
		Pet pet = petService.getPet(id);
		LOGGER.info("Retrieving pet {} with pet id {}", pet, id);
		return pet;
	}
	
	@RequestMapping(path="/pet", method=RequestMethod.POST)
	@ResponseBody
	public Long addPet(@RequestBody AddPetRequest request) {
		LOGGER.info("Creating pet with request: {}", request);
		return petService.addPet(createPet(request));
	}

	private Pet createPet(AddPetRequest request) {
		Pet pet = new Pet();
		pet.setName(request.getName());
		pet.setDescription(request.getDescription());
		return pet;
	}
	
	@RequestMapping(path="/pet/{id}", method=RequestMethod.DELETE)
	@ResponseBody
	public void deletePet(@PathVariable Long id) {
		LOGGER.info("Deleting pet with id: {}", id);
		petService.deletePet(id);
	}

}
