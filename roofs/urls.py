from django.conf.urls import patterns, url, include

from roofs import views

# from rest_framework_nested import routers

# from bets.views import PlayerProfileViewSet


# router = routers.SimpleRouter()
# router.register(r'playerprofiles', PlayerProfileViewSet)
# router.register(r'playerpick', views.PlayerPickViewSet)


urlpatterns = [
  url(r'^$', views.index, name='index'),
  url(r'^api/roofs/$', views.roof_list, name='roof_list'),
  url(r'^api/reviews/(?P<roofid>\d+)/$', views.reviews_detail, name='reviews_detail'),
  ]
