from django.urls import path, include 
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('SleepGoal', views.SleepGoalView)
router.register('ExerciseGoal', views.ExerciseGoalView)
router.register('MentalHealthGoal', views.MentalHealthGoalView)
router.register('ExerciseSchedule', views.ExerciseGoalView)
router.register('DietaryGoal', views.DietaryGoalView)

urlpatterns = [
    path('', include(router.urls))
]