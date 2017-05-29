from django.db import models
from world.models import WorldBorder
from django.contrib.gis.geos import Point


class DashboardRouter(object):
    """
    A router to control all database operations on models in the
    empatica_dashboard application.
    """

    def db_for_read(self, model, **hints):

        if model._meta.app_label == 'empatica_dashboard':
            return 'dashboard'
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label == 'empatica_dashboard':
            return 'dashboard'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        return False

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Make sure the empatica_dashboard app only appears in the 'dashboard'
        database.
        """
        if app_label == 'empatica_dashboard':
            return db == 'dashboard'
        return None


class Download(models.Model):
    APP_ID_CHOICES = (('IOS_ALERT', 'IOS_ALERT'), ('IOS_MATE', 'IOS_MATE'))
    id = models.AutoField(primary_key=True)
    latitude = models.FloatField(default=0)
    longitude = models.FloatField(default=0)
    app_id = models.CharField(max_length=15, choices=APP_ID_CHOICES)
    downloaded_at = models.DateTimeField(auto_now=True)

    # better way is to write the country data inside the Download model (have a one-to-one relationship) when the download happens

    # returns the country id based on the location of the download (lat,lng)
    @property
    def country_id(self):
        try:
            country_id = WorldBorder.objects.get(geom__isnull=False,
                                                 geom__contains=Point(self.latitude, self.longitude)).id
            return country_id
        except:
            return -1

    def __str__(self):  # __unicode__ on Python 2
        try:
            name = WorldBorder.objects.get(geom__isnull=False,
                                           geom__contains=Point(self.latitude, self.longitude)).name
            return name
        except:
            return 'Other'
