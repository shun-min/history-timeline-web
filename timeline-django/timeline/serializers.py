from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Event, Person


class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ["id", "name", "date", "description"]
