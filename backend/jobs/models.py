from django.db import models

# Create your models here.

class Job(models.Model):
    uid = models.CharField(max_length=36, default="")
    type = models.CharField(max_length=16, default="")
    url = models.URLField()
    created_at = models.DateTimeField(null=True)
    company = models.CharField(max_length=100, default="")
    company_url = models.URLField()
    location = models.CharField(max_length=100, default="")
    title = models.CharField(max_length=1000, default="")
    description = models.TextField()
    how_to_apply = models.CharField(max_length=500, default="")
    company_logo = models.CharField(default="", max_length=1000)

    def __str__(self):
        return "Job %s, company %s"%(self.title, self.company)
