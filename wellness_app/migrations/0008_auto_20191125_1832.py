# Generated by Django 2.2.7 on 2019-11-25 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wellness_app', '0007_mentalhealthgoal_therapy'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mentalhealthgoal',
            name='therapy',
            field=models.CharField(choices=[('twice a week', 'twice a week'), ('once a week', 'once a week'), ('every other week', 'every other week'), ('once a month', 'once a month')], default='n/a', max_length=500),
        ),
    ]
