from rest_framework import routers
from .api import DashViewSet

router = routers.DefaultRouter()
router.register('api/dashs', DashViewSet, 'dashs')

urlpatterns = router.urls