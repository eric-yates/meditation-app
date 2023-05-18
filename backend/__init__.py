from flask import Flask
from flask_cors import CORS

cors = CORS(resources={r"/predictions/text_to_speech": {"origins": "http://localhost:3000"}})


def create_app():
    """ Creates a Flask app using the application factory pattern """

    app = Flask(__name__)

    cors.init_app(app)

    # Import blueprints here to avoids circular dependencies
    from backend.routes.predictions import predictions

    app.register_blueprint(predictions)

    return app
