package com.tim.pet.dao.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tim.pet.dao.entity.Pet;

@Repository
public interface PetRepository extends CrudRepository<Pet, Long> {
	
	List<Pet> findByName(String name);

}
