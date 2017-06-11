from __future__ import unicode_literals

from django.db import models


class Roof(models.Model):
    """
    rooftops
    """
    name = models.CharField(max_length=128, blank=True, null=True)
    city = models.CharField(max_length=128, blank=True, null=True)
    address = models.CharField(max_length=128, blank=True, null=True)
    description = models.CharField(max_length=128, blank=True, null=True)
    website = models.CharField(max_length=128, blank=True, null=True)
    phone_no = models.CharField(max_length=128, blank=True, null=True)
    pictureURL = models.CharField(max_length=128, blank=True, null=True)
    
    # ranks
    calculated_rank = models.IntegerField(blank=True, null=True) #run a script to calc this based on all other ranks
    price_rank = models.IntegerField(blank=True, null=True)
    location_rank = models.IntegerField(blank=True, null=True)
    fun_rank = models.IntegerField(blank=True, null=True)
    view_rank = models.IntegerField(blank=True, null=True)
    crowd_rank = models.IntegerField(blank=True, null=True)
    
    # filters
    burough = models.CharField(max_length=128, blank=True, null=True)
    pool = models.BooleanField(default=False)
    live_music = models.BooleanField(default=False)
    touristy = models.BooleanField(default=False)
    good_view = models.BooleanField(default=False)
    short_wait = models.BooleanField(default=False)
    crowd_type = models.CharField(max_length=128) #bro, douche, finance, etc.
    rose_price = models.IntegerField(blank=True, null=True)
    
    
    def __str__(self):
        return self.name
        
    def fetch_reviews(self):
        return ReviewsManager.objects.filter(roof=self)


class ReviewsManager(models.Model):
    """
    all reviews for locations
    """
    roof = models.OneToOneField('Roof')
    reviewee = models.CharField(max_length=128)
    created = models.DateTimeField(auto_now_add=True)
    text = models.CharField(max_length=500)
    stars = models.IntegerField()

    def add_Review(self, roof, reviewee):
        review = ReviewsManager.objects.get_or_create(roof=roof, reviewee=reviewee)