# Generated by Django 2.2.2 on 2019-06-07 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PHREDreader', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='QualityScores',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qualityScores', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Seq',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nucSeq', models.TextField(blank=True)),
                ('addDate', models.DateTimeField(verbose_name='date added')),
            ],
        ),
        migrations.DeleteModel(
            name='FASTQseq',
        ),
    ]