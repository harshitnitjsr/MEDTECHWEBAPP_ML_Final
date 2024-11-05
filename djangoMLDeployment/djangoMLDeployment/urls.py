
from django.contrib import admin
from django.urls import path , include



urlpatterns = [
    path('',include('basicsConcepts.urls')),
    path('admin/', admin.site.urls),
]
