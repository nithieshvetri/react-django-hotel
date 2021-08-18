from rest_framework import serializers
from .models import Hotel

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hotel
        fields=['address','area','city','hotelname','hotel_category','image','image1','property_type','room_type','state','starrating']
