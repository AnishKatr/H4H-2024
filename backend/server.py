from flask import Flask

app = Flask(__name__)

@app.route('/NorthEast')
def NorthEast():
    return {"NorthEast": "Hello from NorthEast!"}

if __name__ == '__main__':
    app.run(debug=True)