from leads.models import Message
from rest_framework import viewsets
from .serializers import MessageSerializer


class PatchNoteViewSet(viewsets.ModelViewSet):

    serializer_class = MessageSerializer

    queryset = PatchNote.objects.all()