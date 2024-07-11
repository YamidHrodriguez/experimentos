import requests
from bs4 import BeautifulSoup
import webbrowser
from config.url_base import url_base
from data.urls import urls

url_base = url_base()
urls = urls()



def init():
    question = input("""
===============================================================================================================================
           BIENVENID@ A SOLUCIONES DE AUTOMATICZACIÓN WEB SILOGTRAN (SAWS)

Bienvenid@, ¿Iniciaste sesión ya?\nA)SÍ\nB)NO\nOpcion: """).lower()

    if question == "b":
        print("Abriendo formulario de inicio de sesión...")
        webbrowser.open(url_base)
    elif question == "a":
        pass
    else:
        error(1)

    while True:
        print("""
********************************************************************************************************************************
Elije por favor una opcion:
    
A) CREAR USUARIO
B) MODIFICAR ORIGEN DE REMESAS
C) MODIFICAR DESTINATARIO DE REMESAS
D) LIBERAR O DESCONSOLIDAR REMESA
E) SALIR
        """)
        if choose():
            break


def choose():
    manifiest = 0
    code_init = 0

    option = input("Opcion: ").lower()
    print("""
________________________________________________________________________________________________________________________________
    """)
    if option == "a":
        print("""CREACION DE USUARIO
Abriendo formulario para creación de usuarios ....""")
     
        webbrowser.open(urls["basics"]["users"]["create"])
    elif option == "b":
        code_init = int(input("""
                    MODIFICAR ORIGEN DE REMESAS

Digite el primer número de la lista de remesas a modificar: """))
        open_shipment(manifiest,"b", code_init)
    elif option == "c":
        print("""MODIFICAR DESTINATARIO DE REMESAS
        
        """)
        manifiest = int(input("Digita el número del manifiesto: "))
        print(f"{urls['ship']['manifiest']['form']}manifiesto_codigo=0{manifiest}#no-back-button")
        input()
        webbrowser.open(f"{urls['ship']['manifiest']['form']}manifiesto_codigo=0{manifiest}#ctl0_MainModule_Remesa")
        code_init = int(input("""Digite el primer número de la lista de remesas a modificar destinatario: """))
        open_shipment(manifiest,"c", code_init)
    elif option == "d":
        webbrowser.open(urls["home"])  # Ajusta esta parte según lo que desees hacer en la opción D
    elif option == "e":
        print("Saliendo del programa.")
        return True
    else:
        print("Opción no válida. Inténtalo de nuevo.")
        return False

def open_shipment(manifiest,type,code):
    url = urls["ship"]["shipment"]["search"]
    i = int(input("¿Cuántas remesas consecutivas quieres abrir?: "))
    for j in range(i):
        webbrowser.open(f"{url}0{code + j}#no-back-button")
    if type == "c":
        url = urls["masters"]["sender"]["change"]
        webbrowser.open(url)
        input()
        webbrowser.open(f"{urls['ship']['manifiest']['DeleteCacheMin']}manifiesto_codigo=0{manifiest}#no-back-button")
        input()
        webbrowser.open(f"{urls['ship']['manifiest']['form']}manifiesto_codigo=0{manifiest}#ctl0_MainModule_EnviarMinisterio")
    else:
        pass

def error(type):
    if type == 1:
        print("Error, digita una opción que se encuentre en el menú")


init()