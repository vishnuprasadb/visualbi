from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from django.db.models import Q
from django.core import serializers

from .models import Job

import requests, datetime

class SyncJobs(View):
    def post(self, request, *args, **kwargs):
        job_url = "https://jobs.github.com/positions.json"

        fetch_jobs = requests.get(job_url).json()
        for job_data in fetch_jobs:
            is_existing_job = Job.objects.filter(uid=job_data["id"]).exists()
            if not is_existing_job:
                self.save_job(job_data)
                print("created job %s"%job_data["id"])


        return JsonResponse({"status": "success", "message": "All the jobs are synced"})

    def save_job(self, job_data):
        new_job = Job.objects.create(uid=job_data["id"])
        for key in job_data.keys():
            if key == "id":
                continue
            else:
                if key == "created_at":
                    value = datetime.datetime.strptime(job_data[key], '%a %b %d %H:%M:%S UTC %Y')
                else:
                    value = job_data[key]
                if value:
                    setattr(new_job, key, value)
        new_job.save()

class GetJobs(View):
    def get(self, request, *args, **kwargs):
        location = request.GET.get("location", None)
        title = request.GET.get("title", None)
    
        filterQ = Q()
        if location:
            filterQ &= Q(location=location)
        if title:
            filterQ &= Q(title=title)

        if filterQ:
            job_query = Job.objects.filter(filterQ)
        else:
            job_query = Job.objects.all()

        #data = eval(serializers.serialize("json", job_query))
        #data = serializers.serialize("json", job_query, stream=out)

        resp = []
        for job in job_query:
            each_job = {}
            for field in job._meta.get_fields():
                each_job[field.name]=getattr(job, field.name)
            resp.append(each_job)
                
        #resp = [{"id": job.id} for job in jobs]
        return JsonResponse(resp, safe=False)
        #return JsonResponse(data, safe=False)
