from rest_framework import serializers
from .models import MissingPersonModal

#*Getting list of all persons
class MissingPersonListSerializer(serializers.ModelSerializer):
    photo = serializers.ImageField(max_length=None,allow_empty_file = False,allow_null = True,required = False,read_only=True)
    class Meta:
        model = MissingPersonModal
        fields = ('id','name','description','photo','age','place')
