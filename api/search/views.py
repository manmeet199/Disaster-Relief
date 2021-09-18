from django.shortcuts import render
from django.http import JsonResponse
from .models import MissingPersonModal
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework import viewsets
from .serializers import MissingPersonListSerializer


# Create your views here.
@csrf_exempt
def addMissingPerson(request):
    if request.method != "POST":
        return JsonResponse({'error': 'Accepting only Post request'})

    name = request.POST['name']
    description = request.POST['description']
    photo = request.FILES['photo']
    age = request.POST['age']
    place = request.POST['place']
    found = False
    instance = MissingPersonModal.objects.create(name=name, description=description, photo=photo, age=age, place=place,
                                                 found=found)
    instance.save()
    return JsonResponse({'success': 'Added person successfully'})


class PersonViewSet(viewsets.ModelViewSet):
    queryset = MissingPersonModal.objects.all().order_by('id')
    serializer_class = MissingPersonListSerializer
