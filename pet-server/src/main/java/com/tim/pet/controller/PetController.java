package com.tim.pet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tim.pet.dao.entity.Pet;
import com.tim.pet.service.PetService;

@EnableAutoConfiguration
@Controller
public class PetController {
	
	@Autowired
	private PetService petService;
	
	@RequestMapping("/application/name")
	@ResponseBody
	public String applicationName() {
		return "Tim's Pet Store!";
	}
	
	@RequestMapping("/pets")
	@ResponseBody
	public Iterable<Pet> getPets() {
		return petService.getAllPets();
	}

}
