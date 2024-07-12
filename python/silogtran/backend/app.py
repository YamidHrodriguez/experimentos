from flask import Flask, jsonify, request, redirect
import requests
from bs4 import BeautifulSoup
import webbrowser
from config.url_base import url_base

url_base=url_base()

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "¡Hola, mundo!"})




if __name__ == '__main__':
    app.run(debug=True)
