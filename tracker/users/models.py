from django.db import models
#https://github.com/rpkilby/jsonfield
from jsonfield import JSONField

# Create your models here.
#https://www.javatpoint.com/django-crud-application
class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)

    def __str__(self):
        return self.name

#class Skill_List(models.Model):
#    skill_username = models.ForeignKey(User, on_delete=models.CASCADE)
class SkillManager(models.Manager):
    def create_skill(self, skill_name, skill_hours, skill_username):
        skill = self.create(skill_name=skill_name, skill_hours=skill_hours, \
                            skill_username=skill_username)
        return skill

class Skill(models.Model):
    skill_name = models.CharField(max_length=100)
    skill_hours = models.DecimalField(max_digits=7, decimal_places=2)
    skill_username = models.ForeignKey(User, on_delete=models.CASCADE)
    #skill_tags = models.JSONField(blank=True, default='')
    #skill_attributes = models.JSONField(blank=True, default='')
    #skill_list = models.ForeignKey(Skill_List, on_delete=models.CASCADE)
    objects = SkillManager()
    def add_hours(self, hours=0, minutes=0):
        self.skill_hours += hours
        if minutes > 0:
            self.skill_hours += (minutes)/60
    def __str__(self):
        return self.name
