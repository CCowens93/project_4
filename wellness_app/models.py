from django.db import models

class SleepGoal(models.Model):
    sleep_goals = models.CharField(
        max_length=255, 
        default='n/a',)
    hours_of_sleep = models.IntegerField( 
        default='n/a')
    bedtime = models.TimeField(
        max_length=100, 
        default='n/a')
    routine = models.CharField(
        max_length=255, 
        default='n/a')

    


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
        choices = body_goals_choices, 
        default = 'n/a'
    )

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
        default= 'n/a'
    )
 
    minutes_of_exercise = models.IntegerField(
        default = 0
    )
 
    cardio = 'cardio'
    strength_building = 'build strength'
    flexibility = 'flexibility'
    balance = 'balance'
 
    type_of_exercise = [
        (cardio, 'cardio'),
        (strength_building, 'build strength'),
        (flexibility, 'flexibility'),
        (balance, 'balance')
    ]
 
    daily_focus = models.CharField(
        max_length=300,
        choices = type_of_exercise,
        default = 'n/a'
    )
 
    

class MentalHealthGoal(models.Model):

    reduce_anxiety = 'reduce anxiety'
    reduce_depression = 'reduce depression'
    increase_self_esteem = 'increase self-esteem'
    reduce_and_or_eliminate_substance_use = 'substance use'

    mental_health_goal_choices = [
        (reduce_anxiety, 'reduce anxiety'),
        (reduce_depression, 'reduce depression'),
        (increase_self_esteem, 'increase self_esteem'),
        (reduce_and_or_eliminate_substance_use, 'reduce and/or eliminate substance use')
    ]

    mental_health_goal = models.CharField(
        max_length= 255,
        choices = mental_health_goal_choices,
        default= 'n/a'
    )

    does_not_apply_to_me = 'does not apply to me'
    take_in_the_morning = 'take in the morning'
    take_at_night = 'take at night'
    take_in_morning_and_night = 'take in morning and night'

    medication_choices = [
        (does_not_apply_to_me, 'does not apply to me'),
        (take_in_the_morning, 'take in the morning'),
        (take_at_night, 'take at night'),
        (take_in_morning_and_night, 'take in the moring and night')
    ]
 
    medication = models.CharField(
        max_length = 255,
        choices = medication_choices,
        default = 'n/a'
 
    )
 
    meditation = models.CharField(
        max_length = 255,
        default ='n/a'
    )
    
    twice_a_week = 'twice a week'
    once_a_week = 'once a week'
    every_other_week = 'every other week'
    once_a_month = 'once a month'

    therapy_sessions_choices = [
        (twice_a_week, 'twice a week'),
        (once_a_week, 'once a week'),
        (every_other_week, 'every other week'),
        (once_a_month, 'once a month')
    ]

    therapy = models.CharField(
        max_length = 500,
        choices = therapy_sessions_choices,
        default = 'n/a'
    )

  


class DietaryGoal(models.Model):

    lose_weight = 'lose weight'
    gain_weight = 'gain weight'
    improve_health = 'improve health'

    dietary_goal_choices = [
        (lose_weight, 'lose weight'),
        (gain_weight, 'gain weight'),
        (improve_health, 'improve health')
    ]

    dietary_goal = models.CharField(
        max_length = 500,
        choices = dietary_goal_choices,
        default = 'n/a'
    )
   

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

   
