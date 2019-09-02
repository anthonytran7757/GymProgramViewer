package com.gymprogramming.workouts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = "com.gymprogramming")
public class WorkoutTrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(WorkoutTrackerApplication.class, args);
    }

}