from django.contrib import admin
from .models import Message


class MessageAdmin(admin.ModelAdmin):
    field = "__all__"


admin.site.register(Message, MessageAdmin)
