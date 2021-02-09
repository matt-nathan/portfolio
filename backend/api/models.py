from django.db import models
from rest_framework import serializers


class Message(models.Model):
    subject = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return self.subject