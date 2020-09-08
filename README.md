# PHRED Quality Visualizer

Quickly render quality score trends in NGS and Nanopore sequencing.
This webapp normalizes variations of PHRED-format quality scores, which 
describe the error probability of an inaccurate DNA base read during sequencing.

## Startup

### *Prerequisites: Python 3.7< & NodeJS 6.4.1<*  

***

**FLASK API TODO: Frontend features are stubbed.**

1. Enter a command line in root directory to start Flask:
```python run.py```  

2. Enter another command line in root directory to install Node dependencies & start React:  
```npm install ./templates/static```
```npm run watch --prefix ./templates/static```  

3. Load the webapp at the IP address & port given by Flask
