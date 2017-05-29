class WorldRouter(object):
    """
    A router to control all database operations on models in the
    world application.
    """

    def db_for_read(self, model, **hints):

        if model._meta.app_label == 'world':
            return 'spatialite'
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label == 'world':
            return 'spatialite'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        if obj1._meta.app_label == 'world' or obj2._meta.app_label == 'world':
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Make sure the auth app only appears in the 'auth_db'
        database.
        """
        if app_label == 'world':
            return db == 'spatialite'
        return None