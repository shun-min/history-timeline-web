from django.db import models


# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateTimeField()

    def __str__(self):
        return self.name


class Person(models.Model):
    name = models.CharField(max_length=100)
    event_involved = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
