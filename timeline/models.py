from django.db import models


# Create your models here.
class Person(models.Model):
    name = models.CharField(max_length=100)


class Event(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateTimeField()
    people_involved = models.ForeignKey(Person, on_delete=models.CASCADE, null=True)

