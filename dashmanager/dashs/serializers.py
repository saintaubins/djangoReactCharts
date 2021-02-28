from rest_framework import serializers
from dashs.models import Dash

# Dash Serializer

class DashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dash
        fields = '__all__'