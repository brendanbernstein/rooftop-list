# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-05-31 22:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roofs', '0002_roof_line_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='roof',
            name='line_time',
        ),
        migrations.AddField(
            model_name='roof',
            name='live_music',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='roof',
            name='peak_wait_time',
            field=models.IntegerField(default=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='roof',
            name='pool',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='roof',
            name='touristy',
            field=models.BooleanField(default=False),
        ),
    ]
