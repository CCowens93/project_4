from django.contrib import admin

from .models import SleepGoal, ExerciseGoal, MentalHealthGoal, DietaryGoal

admin.site.register([SleepGoal, ExerciseGoal, MentalHealthGoal, DietaryGoal])

# Register your models here.
