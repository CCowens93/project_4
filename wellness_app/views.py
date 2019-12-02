from rest_framework import viewsets

from .serializers import SleepGoalSerializer, ExerciseGoalSerializer, MentalHealthGoalSerializer, DietaryGoalSerializer
from .models import SleepGoal, ExerciseGoal, MentalHealthGoal, DietaryGoal
from .forms import SleepForm


class SleepGoalView(viewsets.ModelViewSet):
    queryset = SleepGoal.objects.all()
    serializer_class = SleepGoalSerializer

    
class ExerciseGoalView(viewsets.ModelViewSet):
    queryset = ExerciseGoal.objects.all()
    serializer_class = ExerciseGoalSerializer

class MentalHealthGoalView(viewsets.ModelViewSet):
    queryset = MentalHealthGoal.objects.all()
    serializer_class = MentalHealthGoalSerializer

class DietaryGoalView(viewsets.ModelViewSet):
    queryset = DietaryGoal.objects.all()
    serializer_class = DietaryGoalSerializer
 