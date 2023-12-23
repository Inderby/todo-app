package com.example.spring.controller;

import com.example.spring.dto.Todo;
import com.example.spring.service.TodoService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class TodoController {

  public TodoService todoService;

  public TodoController(TodoService todoService) {
    this.todoService = todoService;
  }

  @GetMapping("users/{username}/todos")
  public List<Todo> retrieveTodos(
    @PathVariable(name = "username") String username
  ) {
    return todoService.findByUsername(username);
  }

  @GetMapping("users/{username}/todo/{id}")
  public Todo retrieveTodo(
    @PathVariable("username") String username,
    @PathVariable("id") Long id
  ) {
    return todoService.findById(id);
  }

  @DeleteMapping("users/{username}/todo/{id}")
  public ResponseEntity<Void> deleteTodo(
    @PathVariable("username") String username,
    @PathVariable("id") Long id
  ) {
    todoService.deleteById(id);
    return ResponseEntity.noContent().build();
  }

  @PutMapping("users/{username}/todo/{id}")
  public Todo updateTodo(
    @PathVariable("username") String username,
    @PathVariable("id") Long id,
    @RequestBody Todo todo
  ) {
    System.out.println("updateTodo: " + todo);
    return todoService.updateTodo(todo);
  }

  @PostMapping("users/{username}/todo")
  public Todo createTodo(@RequestBody Todo entity) {
    entity.setId(Long.valueOf(4));
    System.out.println("entity: " + entity);

    return todoService.updateTodo(entity);
  }
}
