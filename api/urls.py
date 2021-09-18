from django.urls import path, include

urlpatterns = [
    path('user/',include('api.users.urls')),
    path('search/',include('api.search.urls')),
]