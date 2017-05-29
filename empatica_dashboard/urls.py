from django.conf.urls import url
import os
from . import views
from django.contrib.staticfiles.views import serve

urlpatterns = [
    url(r'^$', serve, kwargs={
        'path': 'index.html'}),
    url(r'^statistics/today', views.todays_statistics, name='todays_statistics'),
    url(r'^statistics/downloads/', views.todays_downloads, name='todays_downloads'),
    url(r'^statistics/time-of-day', views.time_of_day_statistics, name='time_of_day_statistics'),
    url(r'^statistics/country', views.top_countries_statistics, name='country_statistics'),
    url(r'^statistics/app-id', views.app_id_statistics, name='app_id_statistics')
]
