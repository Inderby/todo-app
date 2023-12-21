package com.example.spring.controller;

import com.example.spring.dto.Todo;
import com.example.spring.service.TodoService;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    // return todoService.findByUsername(username);
    Todo todo1 = new Todo(
      Long.valueOf(1),
      "test",
      "test1",
      LocalDate.now(),
      false
    );
    Todo todo2 = new Todo(
      Long.valueOf(2),
      "test",
      "test2",
      LocalDate.now(),
      false
    );
    Todo todo3 = new Todo(
      Long.valueOf(3),
      "test",
      "test3",
      LocalDate.now(),
      false
    );
    return List.of(todo1, todo2, todo3);
  }

  @GetMapping("users/{username}/todo/{id}")
  public Todo retrieveTodo(
    @PathVariable("username") String username,
    @PathVariable("id") Long id
  ) {
    return new Todo(id, username, "test4", LocalDate.now(), false);
    //return todoService.findById(id);
  }

  @DeleteMapping("users/{username}/todo/{id}")
  public ResponseEntity<Void> deleteTodo(
    @PathVariable("username") String username,
    @PathVariable("id") Long id
  ) {
    //TODO: delete to todos in database
    return ResponseEntity.noContent().build();
  }

  @PutMapping("users/{username}/todo/{id}")
  public Todo updateTodo(
    @PathVariable("username") String username,
    @PathVariable("id") Long id,
    @RequestBody Todo todo
  ) {
    //TODO: process PUT request
    return todoService.updateTodo(todo);
  }

  @PostMapping("users/{username}/todo/{id}")
  public Todo postMethodName(@RequestBody Todo entity) {
    //TODO: process POST request

    return entity;
  }
}
