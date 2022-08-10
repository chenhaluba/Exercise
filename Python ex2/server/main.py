from flask import Flask
import json
from bson import ObjectId
from flask_cors import CORS
from routers.todos import todos

class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self, obj)


app = Flask(__name__)

CORS(app)

app.json_encoder = JSONEncoder

app.register_blueprint(todos, url_prefix='/todos')


app.run()
