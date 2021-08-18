from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
#from django.httpResponse import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
#from apic.Hotel import hotel
from .models import Hotel
from rest_framework import generics
from rest_framework import filters

from .serializers import HotelSerializer



# Create your views here.
# @api_view(['GET'])
# def search(request):
#     user_list = Hotel.objects.all()
#     user_filter = UserFilter(request.GET, queryset=user_list)
#     return Response(use_filter)

@api_view(['GET'])
def hello_world(request):
    routes=[
        
        '/api/hotel',
        '/api/hotel/?search'
    ]
    
    return Response(routes)



class Hotel(generics.ListCreateAPIView):
    
    search_fields = ['state']
    
    filter_backends = (filters.SearchFilter,)
    queryset = Hotel.objects.all()
    #user_filter = UserFilter(request.GET, queryset)
    serializer_class = HotelSerializer
    

# @api_view(['POST'])
# def search(request):
#     query=request.data.get('query','')
#     if query:
#         hotel=Hotel.objects.all.filter(Hotel(name__icontains=query))
#         serializer=HotelSerializer(hotel,many=True)
#         return Response(serializer.data)



    
    
