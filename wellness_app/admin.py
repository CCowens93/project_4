from django.contrib import admin

from .models import SleepGoal, ExerciseGoal, MentalHealthGoal, ExerciseSchedule, DietaryGoal

admin.site.register([SleepGoal, ExerciseGoal, MentalHealthGoal, ExerciseSchedule, DietaryGoal])

# Register your models here.
