from django.db import models
from typing import Optional


# Create your models here.
class OrganizationManager(models.Manager):
    def create_entity(self, name):
        origanization = self.create(name=name)
        return origanization


class Organization(models.Model):
    name = models.CharField(max_length=100)
    objects = OrganizationManager()

    def __str__(self):
        return self.name


class PersonManager(models.Manager):
    def create_person(self, name):
        person = self.create(name=name)
        return person


class Person(models.Model):
    name = models.CharField(max_length=100)
    organizations_involved = models.ManyToManyField(Organization, blank=True)
    objects = PersonManager()

    def __str__(self):
        return self.name


class EventManager(models.Manager):
    def create_event(self, name, date: Optional = None):
        event = self.create(name=name, date=date)
        return event


class Event(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateTimeField(null=True)
    description = models.TextField(null=True)
    persons_involved = models.ManyToManyField(Person, blank=True)
    organizations_involved = models.ManyToManyField(Organization, blank=True)

    objects = EventManager()

    def __str__(self):
        return self.name


class TimelineManager(models.Manager):
    def create_event(self, name, date: Optional = None):
        event = self.create(name=name, date=date)
        return event


class Timeline(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    events = models.ManyToManyField(Event, blank=True)

    objects = TimelineManager()

    def __str__(self):
        return self.name