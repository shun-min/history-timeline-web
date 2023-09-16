from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.shortcuts import render
from rest_framework import (
    viewsets,
    permissions,
)

from ..models import Timeline, Event, Organization, Person
from ..serializers import (
    TimelineSerializer,
    EventSerializer,
    OrganizationSerializer,
    PersonSerializer,
)


class TimelineEvents(APIView):
    def get(
        self,
        request,
        timeline_id,
    ):
        events = Event.objects.filter(timeline__id=timeline_id).values()
        print()
        return Response(
            data=events,
            status=status.HTTP_200_OK
        )
