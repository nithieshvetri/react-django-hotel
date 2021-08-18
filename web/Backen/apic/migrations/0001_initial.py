# Generated by Django 3.2.5 on 2021-08-16 13:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=100)),
                ('area', models.CharField(max_length=50)),
                ('city', models.CharField(max_length=50)),
                ('hotelname', models.CharField(max_length=150)),
                ('hotel_category', models.CharField(max_length=50)),
                ('image', models.URLField(max_length=1000)),
                ('image1', models.URLField(max_length=1000)),
                ('property_type', models.CharField(max_length=50)),
                ('room_type', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('starrating', models.IntegerField()),
            ],
        ),
    ]
