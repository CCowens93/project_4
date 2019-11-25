# Generated by Django 2.2.7 on 2019-11-25 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wellness_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExerciseGoal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body_goals', models.CharField(choices=[('weight loss', 'weight loss'), ('increase strength', 'increase strength'), ('improve endurance', 'improve endurance'), ('reduce health risks', 'reduce health risks'), ('energy boost', 'energy boost')], max_length=100)),
            ],
        ),
    ]
