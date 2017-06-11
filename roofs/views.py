from django.shortcuts import render
from django.http import JsonResponse
import operator

from roofs.serializers import RoofSerializer, ReviewManagerSerializer
from roofs.models import Roof, ReviewsManager
from django.db.models import Q

# Create your views here.

def home(request):
     return render(request, 'roofs/home.html', {})
     
def index(request):
     return render(request, 'roofs/index.html', {})

def roof_list(request):
    roofs = Roof.objects.all()

    filter_names = ('good_view','pool', )
    
    filter_list = {}
    for key in request.GET:
        filter_list[key] = request.GET[key]
    print(filter_list)
    
    try:
        touristy = request.GET['touristy']
    except:
        touristy = ""
    try:
        good_view = request.GET['good_view']
    except:
        good_view = ""
    try:
        live_music = request.GET['live_music']
    except:
        live_music = ""
    try:
        pool = request.GET['pool']
    except:
        pool = ""
    try:
        short_wait = request.GET['short_wait']
    except:
        short_wait = ""
    
    if touristy=="" and good_view=="" and live_music=="" and pool=="" and short_wait=="":
            roofs = Roof.objects.filter(Q(touristy="") | Q(touristy=True), Q(good_view="") | Q(good_view=True), Q(live_music="") | Q(live_music=True), Q(pool="") | Q(pool=True), Q(short_wait="") | Q(short_wait=True))
    else:
        roofs = roofs.filter(**filter_list)
        
    serializer = RoofSerializer(roofs, many=True)
    return JsonResponse(serializer.data, safe=False)

def reviews_detail(request, roof_id):
    if request.method == 'GET':
        roof = Roof.objects.get(id=roof_id)
        reviews = ReviewsManager.objects.filter(roof=roof)
        serializer = ReviewManagerSerializer(reviews, many=True)
        return JsonResponse(serializer.data, safe=False)