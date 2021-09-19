from django.shortcuts import render
from django.http import JsonResponse
from .models import Users,UserLoc
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework import viewsets
from .serializers import UserSerializer,UserLocSerializer


# Create your views here.
@csrf_exempt
def Register(request):
    if request.method != "POST":
        return JsonResponse({'error': 'Accepting only Post request'})
    try:
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        email = request.POST['email']
        phoneno = request.POST['phoneno']
        medical_info = request.POST['medical_info']
        instance = Users.objects.create(firstname=firstname, lastname=lastname, email=email, phoneno=phoneno,
                                        medical_info=medical_info,
                                        )
        instance.save()
        return JsonResponse({'success': 'Added user successfully'})
    except:
        return JsonResponse({'error':"Not registered"})

@csrf_exempt
def AddLoc(request):
    if request.method!="POST":
        return JsonResponse({'error': 'Accepting only Post request'})
    try:
        lat = request.POST['lat']
        long = request.POST['long']

        instance = UserLoc.objects.create(lat=lat,long=long)
        instance.save()
        return JsonResponse({'success':'Added User loc'})
    except:
        return JsonResponse({'error':"Not Added"})

class UserViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all().order_by('id')
    serializer_class = UserSerializer

class UserLocViewSet(viewsets.ModelViewSet):
    queryset = UserLoc.objects.all().order_by('id')
    serializer_class = UserLocSerializer