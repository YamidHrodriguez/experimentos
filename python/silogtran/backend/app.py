from flask import Flask, jsonify, request, redirect
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import webbrowser
from config.url_base import url_base

url_base = url_base()

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "¡Hola, mundo!"})

@app.route('/login')
def redirect_to_login():
    return redirect('https://egakat.colombiasoftware.net/index.php?#no-back-button', code=302)

if __name__ == '__main__':
    app.run(debug=True)
