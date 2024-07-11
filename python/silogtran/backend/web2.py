import requests
from bs4 import BeautifulSoup
import webbrowser
from config.url_base import url_base
from data.urls import urls

url_base = url_base()
# URLs que quieres abrir
urls = urls()


def open_shipment(type, code):
    url = urls["ship"]["shipment"]["search"]
    i = int(input("¿Cuántas remesas consecutivas quieres abrir?: "))
    for j in range(i):
        webbrowser.open(f"{url}0{code + j}#no-back-button")
    if type == "c":
        url = urls["masters"]["sender"]["change"]
        webbrowser.open(url)
    else:
        pass

def error(type):
    if type == 1:
        print("Error, digita una opción que se encuentre en el menú")


def init():
    question = input("Bienvenid@, ¿Iniciaste sesión ya?\nA)SÍ\nB)NO\nOpcion: ").lower()
    print(urls["basics"]["users"]["create"])
    if question == "b":
        webbrowser.open(url_base)
    elif question == "a":
        pass
    else:
        error(1)

    while True:
        print("""
==================================================
Elije por favor una opcion:
    A) CREAR USUARIO
    B) MODIFICAR ORIGEN DE REMESAS
    C) MODIFICAR DESTINATARIO
    D) LIBERAR O DESCONSOLIDAR REMESA
    E) SALIR
        """)
        if choose():
            break


def choose():

    option = input("Opcion: ").lower()

    if option == "a":
        print("""
***************************************************************************
                        CREACION DE USUARIO
Abriendo formulario para creación de usuarios ....""")
     
        webbrowser.open(urls["basics"]["users"]["create"])
    elif option == "b":
        code_init = int(input("""
***************************************************************************
                    MODIFICAR ORIGEN DE REMESAS

Digite el primer número de la lista de remesas a modificar: """))
        open_shipment("b", code_init)
    elif option == "c":
        print("""
***************************************************************************
                 MODIFICAR DESTINATARIO DE REMESAS
        
        """)
        manifiest = int(input("Digita el número del manifiesto: "))
        webbrowser.open(f"{urls['ship']['manifiest']}manifiesto_codigo=0{manifiest}#no-back-button")
        code_init = int(input("""Digite el primer número de la lista de remesas a modificar destinatario: """))
        open_shipment("c", code_init)
    elif option == "d":
        webbrowser.open(urls["home"])  # Ajusta esta parte según lo que desees hacer en la opción D
    elif option == "e":
        print("Saliendo del programa.")
        return True
    else:
        print("Opción no válida. Inténtalo de nuevo.")
        return False


init()