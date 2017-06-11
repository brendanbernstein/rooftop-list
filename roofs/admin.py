from django.contrib import admin
from roofs.models import Roof, ReviewsManager

# Register your models here.

@admin.register(Roof, ReviewsManager)
class GeneralStuffAdmin(admin.ModelAdmin):
    pass