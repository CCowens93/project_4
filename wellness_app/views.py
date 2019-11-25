from django.shortcuts import render

from .serializers import SleepGoalSerializer, ExerciseGoalSerializer, MentalHealthGoalSerializer, ExerciseScheduleSerializer, DietaryGoalSerializer
from .models import SleepGoal, ExerciseGoal, MentalHealthGoal, ExerciseSchedule, DietaryGoal

# Create your views here.
class SleepGoalView(viewsets.ModelViewSet):
    queryset = SleepGoal.objects.all()
    serializer_class = SleepGoalSerializer

class ExerciseGoalView(viewsets.ModelViewSet):
    queryset = ExerciseGoal.objects.all()
    serializer_class = ExerciseGoalSerializer

class MentalHealthGoalView(viewsets.ModelViewSet):
    queryset = MentalHealthGoal.objects.all()
    serializer_class = MentalHealthGoalSerializer

class ExerciseScheduleView(viewsets.ModelViewSet):
    queryset = ExerciseSchedule.objects.all()
    serializer_class = ExerciseScheduleSerializer

class DietaryGoalView(viewsets.ModelViewSet):
    queryset = DietaryGoal.objects.all()
    serializer_class = DietaryGoalSerializer