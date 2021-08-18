from django.db import models

# Create your models here.
class Hotel(models.Model):
    address=models.CharField(max_length=1000)
    area=models.CharField(max_length=1000)
    city=models.CharField(max_length=1000)
    hotelname=models.CharField(max_length=1500)
    hotel_category=models.CharField(max_length=500)
    image=models.CharField(max_length=1000)
    image1=models.CharField(max_length=1000)
    property_type=models.CharField(max_length=500)
    room_type=models.CharField(max_length=500)
    state=models.CharField(max_length=500)
    starrating=models.IntegerField()


    def __str__(self):
        return self.hotelname
