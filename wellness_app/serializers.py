from rest_framework import serializers

from .models import SleepGoal, ExerciseGoal, MentalHealthGoal, ExerciseSchedule, DietaryGoal

class SleepGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SleepGoal
        fields = ('id', 'sleep_goals', 'hours_of_sleep', 'bedtime', 'routine')

class ExerciseGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseGoal
        fields = ('id', 'body_goals')

class MentalHealthGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentalHealthGoal
        fields = ('id', 'mental_health_goal', 'medication', 'meditation', 'therapy')


class ExerciseScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseSchedule
        fields = ('id', 'workout_schedule', 'hours_of_exercise', 'daily_focus')

class DietaryGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = DietaryGoal
        fields = ('id', 'dietary_goal', 'elimination')