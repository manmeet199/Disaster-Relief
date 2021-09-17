from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.missingPeople,name='search'),
    path('add-missing-user/',views.addMissingUser,name='add-detail')
]