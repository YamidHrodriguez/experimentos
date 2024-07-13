from flask import Flask, jsonify, request, redirect
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import webbrowser
from data.urls import urls

urls = urls()

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "¡Hola, mundo!"})

@app.route('/login')
def redirect_to_login():
    url= f'{urls["home"]}'
    return redirect(url, code=302)

@app.route('/user')
def redirect_to_user():
    url= f'{urls["basics"]["users"]["create"]}'
    print(url)
    return redirect(url, code=302)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
