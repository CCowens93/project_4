# Generated by Django 2.2.7 on 2019-11-25 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DietaryGoal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dietary_goal', models.CharField(choices=[('lose weight', 'lose weight'), ('gain weight', 'gain weight'), ('improve health', 'improve health')], default='n/a', max_length=500)),
                ('elimination', models.CharField(choices=[('dairy', 'dairy'), ('soy', 'soy'), ('red meat', 'red meat'), ('pork', 'pork'), ('processed sugar', 'processed sugar'), ('alcohol', 'alcohol'), ('gluten', 'gluten')], default='n/a', max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='ExerciseGoal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body_goals', models.CharField(choices=[('weight loss', 'weight loss'), ('increase strength', 'increase strength'), ('improve endurance', 'improve endurance'), ('reduce health risks', 'reduce health risks'), ('energy boost', 'energy boost')], max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='ExerciseSchedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workout_schedule', models.CharField(choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], max_length=100)),
                ('hours_of_exercise', models.DecimalField(decimal_places=1, default=0, max_digits=2)),
                ('daily_focus', models.CharField(choices=[('cardio', 'cardio'), ('build strength', 'build strength'), ('flexibility', 'flexibility'), ('balance', 'balance')], default='n/a', max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='MentalHealthGoal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mental_health_goal', models.CharField(choices=[('reduce anxiety', 'reduce anxiety'), ('reduce depression', 'reduce depression'), ('increase self-esteem', 'increase self_esteem'), ('substance use', 'reduce and/or reduce substance use')], default='n/a', max_length=255)),
                ('medication', models.CharField(default='n/a', max_length=255)),
                ('meditation', models.CharField(default='n/a', max_length=255)),
                ('therapy', models.CharField(choices=[('twice a week', 'twice a week'), ('once a week', 'once a week'), ('every other week', 'every other week'), ('once a month', 'once a month')], default='n/a', max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='SleepGoal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sleep_goals', models.CharField(default='n/a', max_length=255)),
                ('hours_of_sleep', models.IntegerField(default='n/a')),
                ('bedtime', models.TimeField(default='n/a', max_length=100)),
                ('routine', models.CharField(default='n/a', max_length=255)),
            ],
        ),
    ]
