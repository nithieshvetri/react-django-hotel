# Generated by Django 3.2.5 on 2021-08-16 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apic', '0002_auto_20210816_2209'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hotel',
            name='area',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='city',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='hotel_category',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='property_type',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='room_type',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='state',
            field=models.CharField(max_length=500),
        ),
    ]
