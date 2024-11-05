from django.urls import path
from . import views

urlpatterns =[
    path('',views.Predictor,name='predictor'),
    path('mental/',views.Mental,name='mental'),
    path('skin/',views.Skin,name="skin"),
    path('chatbot/',views.chatbot,name='chatbot'),
    path('xray/',views.xray,name='xray')
]
