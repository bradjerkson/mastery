from rest_framework import serializers
from .models import User, Skill

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('pk', 'username', 'email', 'password', 'firstname', 'lastname')


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('pk', 'skill_name', 'skill_hours', 'skill_username')
