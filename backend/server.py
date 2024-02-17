from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


@app.route("/NorthEast")
def NorthEast():
    return {"NorthEast": "Hello from NorthEast!"}


@app.route("/getPop")
def getPop():
    with open("gb.json") as f:
        data = json.load(f)
    return data


if __name__ == "__main__":
    app.run(debug=True)
