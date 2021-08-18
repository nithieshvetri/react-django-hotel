from django.contrib import admin
from apic.models import Hotel
# Register your models here.
from import_export.admin import ImportExportModelAdmin

# Register your models here.

# admin.site.register(item)
@admin.register(Hotel)
class ViewAdmin(ImportExportModelAdmin):
    pass

