package com.gymprogramming.workouts.Model;


import javax.persistence.*;
import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;


@Entity
public class Workout {
    private @Id @GeneratedValue Long id;
    private String name;
    private DayOfWeek dayOfWeek;

    @CollectionTable(name="id")
    @Column(length = 1000)
    private HashMap<String,String> exercises;

    private Workout(){}

    public Workout(String workoutName, DayOfWeek dayName){
        name = workoutName;
        dayOfWeek = dayName;
        exercises = new HashMap<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public DayOfWeek getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(DayOfWeek dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public HashMap<String, String> getExercises() {
        return exercises;
    }

    public void setExercises(HashMap<String, String> exercises) {
        this.exercises = exercises;
    }

    public void addExercise(String exercise, String sets){
        this.exercises.put(exercise, sets);
    }
}
