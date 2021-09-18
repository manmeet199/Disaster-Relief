from django.shortcuts import render
from django.http import JsonResponse
from .models import Users
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework import viewsets
from .serializers import UserSerializer


# Create your views here.
@csrf_exempt
def Register(request):
    if request.method != "POST":
        return JsonResponse({'error': 'Accepting only Post request'})

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


class UserViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all().order_by('id')
    serializer_class = UserSerializer
