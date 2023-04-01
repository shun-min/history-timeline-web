from datetime import datetime
import logging

from django.http import Http404, HttpResponse
from django.template import loader
from django.shortcuts import render

from .models import Event, Person


# Create your views here.
def index(request):
    events = Event.objects.order_by("name")
    context = {
        "events": events
    }
    template = loader.get_template("timeline/world-timeline.html")
    return HttpResponse(template.render(context, request))


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
    new_event = Event.objects.create_event(name=data["event_name"])
    return HttpResponse(f"Created new event {new_event.name}")
