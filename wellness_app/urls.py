from django.urls import path, include 
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('sleep_goal', views.SleepGoalView)
router.register('exercise_goal', views.ExerciseGoalView)
router.register('mental_health_goal', views.MentalHealthGoalView)
router.register('exercise_schedule', views.ExerciseScheduleView)
router.register('dietary_goal', views.DietaryGoalView)

urlpatterns = [
    path('', include(router.urls)),
]