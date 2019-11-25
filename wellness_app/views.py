from django.shortcuts import render

from .serializers import SleepGoalSerializer, ExerciseGoalSerializer, MentalHealthGoalSerializer, ExerciseScheduleSerializer, DietaryGoalSerializer
from .models import SleepGoal, ExerciseGoal, MentalHealthGoal, ExerciseSchedule, DietaryGoal

# Create your views here.
class SleepGoalView(viewsets.ModelViewSet):
    queryset = SleepGoal.objects.all()
    serializer_class = SleepGoalSerializer