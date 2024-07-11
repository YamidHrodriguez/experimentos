import requests
from bs4 import BeautifulSoup
import webbrowser
from data.urls import urls
from config.url_base import url_base

urls = urls()
url_base= url_base()

def modify_addressee(manifiest,urls):
    url = urls["masters"]["sender"]["change"]
    webbrowser.open(url)
    input()
    url2= urls["ship"]["manifiest"]["DeleteCacheMin"]
    webbrowser.open(url2)
    input()
    search_manifiest(manifiest,"ctl0_MainModule_EnviarMinisterio")


def open_shipment(type, urls, code,manifiest):
    url = urls["ship"]["shipment"]["search"]
    i = int(input("¿Cuántas remesas consecutivas quiere abrir? "))
    for j in range(i):
        webbrowser.open(f"{url}0{code+j}#no-back-button")
    if type == "c":
        modify_addressee(manifiest,urls)
        
def search_manifiest(manifiest,id):
    webbrowser.open(f"{urls['ship']['manifiest']['form']}manifiesto_codigo=0{manifiest}#{id}")

def error(type):
    if type == 1:
        print("Error, digita una opción que se encuentre en el menú")

def init():
    question = input("""
=============================================================================================================    
Bienvenid@, ¿Iniciaste sesión ya?\nA) SÍ\nB) NO\nOpción: """).lower()

    if question == "b":
        webbrowser.open(url_base)
        input()
    elif question == "a":
        pass
    else:
        error(1)

    while True:
        print("""
==================================================
Elije por favor una opción:
    A) CREAR USUARIO
    B) MODIFICAR ORIGEN DE REMESAS
    C) MODIFICAR DESTINATARIO
    D) LIBERAR O DESCONSOLIDAR REMESA
    E) SALIR
        """)
        if choose():
            break

def choose():
    option = input("Opción: ").lower()

    if option == "a":
        print("""
***************************************************************************
                        CREACIÓN DE USUARIO
Abriendo formulario para creación de usuarios ....""")
        webbrowser.open(urls["basics"]["users"]["create"])
    elif option == "b":
        code_init = int(input("""
***************************************************************************
                    MODIFICAR ORIGEN DE REMESAS

Digite el primer número de la lista de remesas a modificar: """))
        open_shipment("b", urls, code_init,0)
    elif option == "c":
        print("""
***************************************************************************
                 MODIFICAR DESTINATARIO DE REMESAS
        """)
        manifiest = int(input("Digita el número del manifiesto: "))
        search_manifiest(manifiest,"ctl0_MainModule_Remesa")
        code_init = int(input("Digite el primer número de la lista de remesas a modificar destinatario: "))
        open_shipment("c", urls, code_init,manifiest)
    elif option == "d":
        webbrowser.open(options["d"])
    elif option == "e":
        print("Saliendo del programa.")
        return True
    else:
        print("Opción no válida. Inténtalo de nuevo.")
        return False

#ALGORITMO PRINCIPAL
init()
