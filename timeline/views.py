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
