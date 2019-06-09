from flask import Flask

app = Flask(__name__,
 static_folder = './public',
 template_folder = './static')

from templates.qualityScoreVisualizer.views \
 import qualityScoreVisualizer_blueprint

# register blueprints
app.register_blueprint(qualityScoreVisualizer_blueprint)