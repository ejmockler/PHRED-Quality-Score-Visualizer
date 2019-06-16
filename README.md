# PHRED Quality Visualizer

A webapp for easy visualization of PHRED-format quality scores from FASTQ sequencing data.
PHRED scores describe the error probability of an inaccurate DNA base read during sequencing.

## Startup

### *Prerequisites: Python 3.7< & NodeJS 6.4.1<*  

***

Enter a command line in root directory to start Flask:
```python run.py```  

Enter another command line in root directory to install Node dependencies & start React:  
```npm install ./templates/static```
```npm run watch --prefix ./templates/static```  

Load the webapp at the IP address & port given by Flask
