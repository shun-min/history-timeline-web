from . import views
from django.urls import path

app_name = "timeline"
urlpatterns = [
    path('', views.index, name="index"),
    path('<int:event_pk>', views.detail, name="detail"),
    path('form', views.form, name="form"),
    path('submit_entry', views.submit_entry, name="submit_entry"),
]
