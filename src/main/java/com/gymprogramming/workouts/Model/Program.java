package com.gymprogramming.workouts.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Program {
    private @Id @GeneratedValue Long id;
    @NotBlank
    private String programName;

    @OneToMany
    private List<Workout> listOfWorkouts;


    private Program(){}

    public Program(String program_Name){
        programName = program_Name;
        listOfWorkouts = new ArrayList<>();
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public List<Workout> getListOfWorkouts() {
        return listOfWorkouts;
    }

    public void setListOfWorkouts(List<Workout> listOfWorkouts) {
        this.listOfWorkouts = listOfWorkouts;
    }

    public void addWorkout(Workout newWorkOut){
        listOfWorkouts.add(newWorkOut);
    }

}
