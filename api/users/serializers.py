from rest_framework import serializers
from .models import Users,UserLoc


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'firstname', 'lastname', 'email', 'phoneno', 'medical_info')

class UserLocSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLoc
        fields = ('lat','long')
