from datetime import datetime
import logging

from django.http import Http404, HttpResponse
from django.template import loader
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


# Create your views here.
def index(request):
    events = Event.objects.order_by("name")
    context = {
        "events": events
    }
    template = loader.get_template("index.html")
    return HttpResponse(template.render(context, request))


class TimelineViewSet(viewsets.ModelViewSet):
    queryset = Timeline.objects.all().order_by("id")
    serializer_class = TimelineSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by("id")
    serializer_class = EventSerializer


class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all().order_by("id")
    serializer_class = OrganizationSerializer


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all().order_by("id")
    serializer_class = PersonSerializer


def detail(request, event_pk):
    try:
        event = Event.objects.get(pk=event_pk)
    except Event.DoesNotExist:
        raise Http404("Event does not exist")
    return render(request, "timeline/detail.html", {"event": event})


def form(request):
    return render(request, "timeline/form.html")


def submit_entry(request):
    data = request.POST
    new_organization = None
    new_event = Event.objects.create_event(name=data["event_name"])
    if "organization" in data.keys():
        new_organization = Organization.objects.create_entity(name=data["organization"])
        new_organization.event_involved = new_event
        new_organization.save()
    if "person" in data.keys():
        new_person = Person.objects.create_person(name=data["person"])
        new_person.event_involved = new_event
        if new_organization:
            new_person.organization_involved = new_organization
        new_person.save()
    return HttpResponse(f"Created new event {new_event.name}")
