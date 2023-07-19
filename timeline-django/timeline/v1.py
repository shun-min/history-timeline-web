from django.http import Http404, HttpResponse
from rest_framework.views import APIView
from django.shortcuts import render
from rest_framework import (
    viewsets,
    permissions,
)

from .models import Timeline, Event, Organization, Person
from .serializers import (
    TimelineSerializer,
    EventSerializer,
    OrganizationSerializer,
    PersonSerializer,
)


class TimelineEvents(APIView):
    events = Event.objects.filter(timeline_id=timeline_id)
    return HttpResponse(
        data
    )