from django.db import models

class Seq (models.Model):
    nucSeq = models.TextField(blank=True)
    addDate = models.DateTimeField('date added')
    def __str__(self):
        return self.nucSeq

class QualityScores (models.Model):
    seq = models.ForeignKey(Seq, on_delete=models.CASCADE)
    qualityScores = models.TextField(blank=True)
    def __str__(self):
        return self.qualityScores