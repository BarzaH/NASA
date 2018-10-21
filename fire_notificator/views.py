from django.shortcuts import render, redirect
from django.views.generic import TemplateView
import pandas as pd
import random
# Create your views here.

class FireMap(TemplateView):
    template_name = "firemap.html"

    def get(self, request, *args, **kwargs):
        context = {}
        if "history" in request.GET and request.GET.get("history"):
            csv_file = pd.read_csv("/Users/mergalievibragim/Desktop/NASA/fire_notificator/utils/final_ds.csv")
            points = [[x[0], x[1]] for x in csv_file.loc[:20, ["LATITUDE", "LONGITUDE"]].values]
            context["points"] = points

        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):

        rand_percentage = random.uniform(60,70)
        context = {"percentage": int(rand_percentage)}
        return render(request, self.template_name, context)

class Subscription(TemplateView):
    template_name = "subscription.html"

    def get(self, request, *args, **kwargs):

        context = {}
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):

        context = {}
        return redirect("/")
