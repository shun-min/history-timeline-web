from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Event, Organization, Person


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["id", "name"]


class PersonSerializer(serializers.ModelSerializer):
    organizations_involved = OrganizationSerializer(read_only=True, many=True)

    class Meta:
        model = Person
        fields = ["id", "name", "organizations_involved"]


class EventSerializer(serializers.ModelSerializer):
    persons_involved = PersonSerializer(read_only=True, many=True)
    organizations_involved = OrganizationSerializer(read_only=True, many=True)

    class Meta:
        model = Event
        fields = ["id", "name", "date", "description", "persons_involved", "organizations_involved"]
