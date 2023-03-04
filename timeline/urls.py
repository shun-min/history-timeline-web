from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name="index"),
    path('<int:event_pk>/', views.detail, name="detail"),
    # path('<int:person_id>', views.person, name="person"),
]
