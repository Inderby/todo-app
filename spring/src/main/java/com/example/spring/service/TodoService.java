package com.example.spring.service;

import com.example.spring.dto.Todo;
import com.example.spring.repository.TodoRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

@Service
@RequiredArgsConstructor
public class TodoService {

  private final TodoRepository todoRepository;

  public List<Todo> getTodoList(String username) {
    return null;
  }

  public List<Todo> findByUsername(String username) {
    return todoRepository.findByUsername(username);
  }

  public Todo findById(Long id) {
    return todoRepository.findById(id).get();
  }
}
