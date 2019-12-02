from django import forms

from .models import SleepGoal

class SleepForm(forms.ModelForm):
    class Meta:
        model = SleepGoal
        fields = '__all__'
    