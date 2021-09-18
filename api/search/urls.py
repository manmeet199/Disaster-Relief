from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'',views.PersonViewSet)

urlpatterns = [
    path('add-missing-person/',views.addMissingPerson,name='add-detail'),
    path('',include(router.urls)),
]