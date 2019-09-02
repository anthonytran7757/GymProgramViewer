package com.gymprogramming.workouts.Controller;

import com.gymprogramming.workouts.Model.Program;
import com.gymprogramming.workouts.Model.ProgramRepository;
import com.gymprogramming.workouts.Model.Workout;

import com.gymprogramming.workouts.Model.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.time.DayOfWeek;


@Controller
public class ProgramController {
    @Autowired
    private ProgramRepository ProgramRepository;
    @Autowired
    private WorkoutRepository WorkoutRepository;

    @RequestMapping(value = "/api/program", method = RequestMethod.POST)
     public ResponseEntity addNewProgram(@RequestBody LinkedHashMap<String, Object> requestBody){
        String programName = (String) requestBody.get("name");
        Program programToAdd = new Program(programName);
        ArrayList<LinkedHashMap> workoutsFromJSON = (ArrayList<LinkedHashMap>) requestBody.get("workouts");
        ArrayList<Workout> workouts= new ArrayList<>();
        for (int i = 0; i < workoutsFromJSON.size(); i++){
            //create workout
            LinkedHashMap currWorkout = workoutsFromJSON.get(i);
            Workout workoutToAdd = createWorkout(currWorkout, i);
            programToAdd.addWorkout(workoutToAdd);
            WorkoutRepository.save(workoutToAdd);
        }
        ProgramRepository.save(programToAdd);
        return new ResponseEntity("complete", HttpStatus.ACCEPTED);
    }

    private Workout createWorkout (LinkedHashMap currWorkout, int currWOIndex){
        String workoutName = (String) currWorkout.get("workoutName");
        int dayOfWeekInt = (int) currWorkout.get("day");
        DayOfWeek currDay = DayOfWeek.of(dayOfWeekInt);
        Workout workoutToAdd = new Workout(workoutName, currDay);
        //create and add exercises to workout
        ArrayList<LinkedHashMap> currWOExercises = (ArrayList<LinkedHashMap>)currWorkout.get("exercises");
        for(int j = 0; j < currWOExercises.size(); j++){
            LinkedHashMap currExercise = currWOExercises.get(currWOIndex);
            String setsAndReps = formatSetsAndReps(currExercise, j);
            String exerciseName = formatExerciseName(currExercise, j);
            workoutToAdd.addExercise(exerciseName, setsAndReps);
        }
        return workoutToAdd;
    }
    private String formatExerciseName(LinkedHashMap currExercise, int currExIndex){
        String exName = (String)currExercise.get("exerciseName");
        if (exName.isEmpty())
            return "Rest";
        else
            return exName + ": ";
    }
    private String formatSetsAndReps(LinkedHashMap currExercise, int currExIndex){
        String sets = (String) currExercise.get("sets");
        String reps = (String) currExercise.get("reps");
        if (sets.isEmpty() & reps.isEmpty()){
            return "";
        }
        else if (!sets.isEmpty() && reps.isEmpty()){
            return "Sets: "+ sets;
        }
        else if (sets.isEmpty()){
            return "Reps: " + reps;
        }
        else{
            return sets + " x " + reps;
        }
    }
}
