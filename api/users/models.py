from django.db import models

# Create your models here.


class Users(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.CharField(max_length=20)
    phoneno = models.CharField(max_length=10)
    medical_info = models.TextField()

    def __str__(self):
        return self.firstname
