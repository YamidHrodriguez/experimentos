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
@app.route('/shipment', methods=['GET'])
def redirect_shipment():
    code = request.args.get('code-shipment')
    quantity = request.args.get('num-shipments')
    
    return f'Nombre: {code}, Apellido: {quantity}'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
