package com.gymprogramming.workouts.Model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;


@Component
public class DatabaseLoader implements CommandLineRunner {
    private final ProgramRepository programRepository;
    private final WorkoutRepository workoutRepository;

    @Autowired
    public DatabaseLoader(ProgramRepository pr, WorkoutRepository wr){
        this.programRepository = pr;
        this.workoutRepository = wr;
    }

    @Override
    public void run(String... strings) throws Exception{
        //create program

        Program programA = new Program("program A");

        //fill programs with workouts
        for(int i = 1; i <= 5; i++){
            String workoutName = "workout" + (char)(i - 1 + 'A');
            DayOfWeek workoutDay = DayOfWeek.of(i);
            Workout newWorkout = new Workout(workoutName, workoutDay);
            for (int j = 0; j < 5; j++){
                String exerciseName = workoutName + (char)(j + 'A');
                String exerciseSets = Integer.toString(i) + " X " + Integer.toString(j + 1 );
                newWorkout.addExercise(exerciseName, exerciseSets);
            }
            programA.addWorkout(newWorkout);
            this.workoutRepository.save(newWorkout);
        }
        //make workouts
        this.programRepository.save(programA);

        Program programB = new Program("program B");
        this.programRepository.save(programB);

    }
}
