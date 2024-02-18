from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return "Hello, World!"


@app.route("/getCovid")
def getFlu():
    with open("./covidJsons/output.json") as f:
        data = json.load(f)
    return data


@app.route("/getPop")
def getPop():
    with open("test.json") as f:
        data = json.load(f)
    return data


if __name__ == "__main__":
    app.run(debug=True)
