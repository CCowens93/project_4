from django.db import models

class SleepGoal(models.Model):
    sleep_goals = models.CharField(
        max_length=255, 
        default='n/a')
    hours_of_sleep = models.CharField(
        max_length=100, 
        default='n/a')
    bedtime = models.CharField(
        max_length=100, 
        default='n/a')
    routine = models.CharField(
        max_length=255, 
        default='n/a')
 
    def __str__(self):
        return self.sleep_goals


class ExerciseGoal(models.Model):
    
 
    weight_loss = 'weight loss'
    increase_strength = 'increase strength'
    improve_endurance = 'improve endurance'
    reduce_health_risks = 'reduce health risks'
    energy_boost = 'energy boost'
 
    body_goals_choices = [
        (weight_loss, 'weight loss'),
        (increase_strength, 'increase strength'),
        (improve_endurance, 'improve endurance'),
        (reduce_health_risks, 'reduce health risks'),
        (energy_boost, 'energy boost')
    ]
 
    body_goals = models.CharField(
        max_length = 100,
        choices = body_goals_choices
    )

class MentalHealthGoal(models.Model):
 
    medication = models.CharField(
        max_length = 255,
        default = 'n/a'
 
    )
 
    meditation = models.CharField(
        max_length = 255,
        default ='n/a'
    )

class ExerciseSchedule(models.Model):
 
    Monday = 'Monday'
    Tuesday = 'Tuesday'
    Wednesday = 'Wednesday'
    Thursday = 'Thursday'
    Friday = 'Friday'
    Saturday = 'Saturday'
    Sunday = 'Sunday'
 
    day_of_the_week = [
        (Monday, 'Monday'),
        (Tuesday, 'Tuesday'),
        (Wednesday, 'Wednesday'),
        (Thursday, 'Thursday'),
        (Friday, 'Friday'),
        (Saturday, 'Saturday'), 
        (Sunday, 'Sunday')
    ]
 
    workout_schedule = models.CharField(
        max_length = 100,
        choices = day_of_the_week,
    )
 
    hours_of_exercise = models.DecimalField(
        max_digits = 2,
        decimal_places = 1,
        default = 0
    )
 
    cardio = 'cardio'
    strength_building = 'strength building'
    flexibility = 'flexibility'
    balance = 'balance'
 
    type_of_exercise = [
        (cardio, 'cardio'),
        (strength_building, 'strength building'),
        (flexibility, 'flexibility'),
        (balance, 'balance')
    ]
 
    daily_focus = models.CharField(
        max_length=300,
        choices = type_of_exercise,
        default = 'n/a'
    )
 
    def __str__(self):
        return self.daily_focus

class DietaryGoal(models.Model):

    dairy = 'dairy'
    soy = 'soy'
    red_meat = 'red meat'
    pork = 'pork'
    processed_sugar = 'processed sugar'
    alcohol = 'alcohol'
    gluten = 'gluten'

    elimination_choices = [
        (dairy, 'dairy'),
        (soy, 'soy'),
        (red_meat, 'red meat'),
        (pork, 'pork'),
        (processed_sugar, 'processed sugar'),
        (alcohol, 'alcohol'),
        (gluten, 'gluten')
    ]

 
    elimination = models.CharField(
        max_length =500,
        choices = elimination_choices,
        default ='n/a'
    )




