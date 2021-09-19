from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'loc-list',views.UserLocViewSet)

urlpatterns = [
    path('register/', views.Register, name='register'),
    path('', include(router.urls)),
    path('add-loc/',views.AddLoc,name="Add Location of user")
]
