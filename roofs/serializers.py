from rest_framework import serializers

from roofs.models import Roof, ReviewsManager

class RoofSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roof
        fields = "__all__"
        
class ReviewManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewsManager
        fields = "__all__"