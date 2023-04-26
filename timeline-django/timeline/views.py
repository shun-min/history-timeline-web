from datetime import datetime
import logging

from django.http import Http404, HttpResponse
from django.template import loader
from django.shortcuts import render
from rest_framework import (
    viewsets,
    permissions,
)

from .models import Event, Organization, Person
from .serializers import EventSerializer


# Create your views here.
def index(request):
    events = Event.objects.order_by("name")
    context = {
        "events": events
    }
    template = loader.get_template("index.html")
    return HttpResponse(template.render(context, request))


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by("id")
    serializer_class = EventSerializer


def detail(request, event_pk):
    try:
        event = Event.objects.get(pk=event_pk)
    except Event.DoesNotExist:
        raise Http404("Event does not exist")
    return render(request, "timeline/detail.html", {"event": event})


def form(request):
    # return render(request, "timeline/form.html")
    context = {}
    template = loader.get_template("index.html")
    return HttpResponse(template.render(context, request))


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
