from django.shortcuts import render
from .models import divan as modelDivan
# Create your views here.


def home(request):
    divan = modelDivan.objects.all()
    return render(request,'furniture/home.html',{'divan':divan})