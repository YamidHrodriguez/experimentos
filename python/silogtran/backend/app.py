from flask import Flask, jsonify, request, redirect
from flask_cors import CORS, cross_origin

# Definición de las URLs desde un archivo externo
from data.urls import urls
urls = urls()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def home():
    return jsonify({"message": "¡Hola, mundo!"})

@app.route('/login')
def redirect_to_login():
    url = f'{urls["home"]}'
    return redirect(url, code=302)

@app.route('/user')
def redirect_to_user():
    url = f'{urls["basics"]["users"]["create"]}'
    return redirect(url, code=302)

@cross_origin
@app.route('/shipment/<cod>', methods=['GET'])
def redirect_shipment(cod):
    url_base = urls["ship"]["shipment"]["search"]
    url = f'{url_base}{cod}'
    return redirect(url, code=302)

@app.route('/change_sender_respondent', methods=['GET'])
def redirect_change_sender_respondent():
    url = urls["masters"]["sender"]["change"]
    return redirect(url, code=302)

@app.route('/manifiest/<cod>', methods=['GET'])
def redirect_manifiest(cod):
    url_base = urls["ship"]["manifiest"]["search"]
    url = f'{url_base}{cod}'
    return redirect(url, code=302)

@app.route('/manifiest/delete_cache_min', methods=['GET'])
def redirect_deleteCacheMin():
    url = urls["ship"]["manifiest"]["DeleteCacheMin"]
    return redirect(url, code=302)

@app.route('/shipment/deconsolidation_shipment')
def deconsolidation_shipment():
    url = urls["ship"]["shipment"]["procedure"]["deconsolidation"]
    return redirect(url, code=302)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
