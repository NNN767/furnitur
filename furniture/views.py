from django.shortcuts import render
from .models import divan as modelDivan
from django.http import JsonResponse
from django.db.models import QuerySet

import json
from django.forms.models import model_to_dict
# Create your views here.



def home(request):
    divan = modelDivan.objects.order_by()[:2]
    return render(request,'furniture/home.html',{'divan':divan})


def detail(request,furniture_id):
    test_bd =furniture_id

    divan = modelDivan.objects.all()
    return render(request,'furniture/detail.html',{'test_bd':test_bd})


def ajax_get_divan(request,start_id,end_id,name):
    divan = modelDivan.objects.filter(title__icontains=name)[start_id:end_id].values()
    return JsonResponse(list(divan), safe=False)