from dashs.models import Dash
from rest_framework import viewsets, permissions
from .serializers import DashSerializer

# Lead Viewset

class DashViewSet(viewsets.ModelViewSet):
    # This is the inital queryset when first setting up the api.
    queryset = Dash.objects.all()
    
    permissions_classes = [
        # permissions.IsAuthenticated
        permissions.AllowAny
    ]

    serializer_class = DashSerializer

    # this part works after auth and mapping of users and models.
    # def get_queryset(self):
    #     return self.request.user.dashs.all()

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)