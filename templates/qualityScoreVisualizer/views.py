from flask import render_template, Blueprint

qualityScoreVisualizer_blueprint = Blueprint('qualityScoreVisualizer', __name__)

@qualityScoreVisualizer_blueprint.route('/')
def index():
 return render_template('index.html')