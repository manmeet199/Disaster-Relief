# Generated by Django 3.2.7 on 2021-09-18 08:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=100)),
                ('lastname', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=20)),
                ('phoneno', models.CharField(max_length=10)),
                ('medical_info', models.TextField()),
            ],
        ),
    ]
