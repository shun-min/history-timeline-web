from . import views
from .api import v1
from django.urls import path

app_name = "timeline"
urlpatterns = [
    path('', views.index, name="index"),
    path(
        'timeline/<int:timeline_id>/events',
        v1.TimelineEvents,
        name="get_events"
    ),
]
