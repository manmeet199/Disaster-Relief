from django.db import models

# Create your models here.
# - Name(CharField)
# - Photo(ImageField)
# - Age(IntegerField)
# - Place/LastScene(TextField)
# - Description(TextField)

class MissingPersonModal(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to="images/",blank=True)
    age = models.CharField(max_length=20)
    place = models.TextField()
    description = models.TextField()
    found = models.BooleanField(default=False)

    def __str__(self):
        return self.name