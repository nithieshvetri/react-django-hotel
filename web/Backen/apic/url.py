from django.contrib import admin

from django.urls import path
from apic import views

urlpatterns=[
    path('',views.hello_world,name="hello"),
    path('hotel/',views.Hotel.as_view(),name='Hotel'),
    ]