from django.contrib import admin

from .models import Event, Person, Organization, Timeline

# Register your models here.
admin.site.register(Event)
admin.site.register(Person)
admin.site.register(Organization)
admin.site.register(Timeline)
