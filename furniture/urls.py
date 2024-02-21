
from django.conf import settings
from django.urls import path ,include
from . import views
from django.conf.urls.static import static

app_name = 'furniture'


urlpatterns =[

    path('', views.home, name ='home' ),

    path('<int:start_id>/<int:end_id>/', views.ajax_get_view, name = 'ajax_get_view'  ),


]


urlpatterns+= static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)