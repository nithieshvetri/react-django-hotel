# Generated by Django 3.2.5 on 2021-08-16 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apic', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hotel',
            name='address',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='area',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='city',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='hotelname',
            field=models.CharField(max_length=1500),
        ),
    ]
