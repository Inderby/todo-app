package com.example.spring.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Todo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String username;
  private String description;
  private LocalDate targetDate;
  private boolean done;

  @Override
  public String toString() {
    return (
      "Todo [id=" +
      id +
      ", username=" +
      username +
      ", description=" +
      description +
      ", targetDate=" +
      targetDate +
      ", done=" +
      done +
      "]"
    );
  }
}
