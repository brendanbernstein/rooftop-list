# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-05-22 03:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roofs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='roof',
            name='line_time',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
