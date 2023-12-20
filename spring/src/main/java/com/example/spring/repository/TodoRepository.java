package com.example.spring.repository;

import com.example.spring.dto.Todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
  List<Todo> findByUsername(String username);
}
