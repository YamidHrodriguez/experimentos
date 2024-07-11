from helpers.search_manifiest import search_manifiest
from helpers.delete_cache import delete_cache_min


import webbrowser

def open_shipment(urls,manifiest,type,code):
    url = urls["ship"]["shipment"]["search"]
    i = int(input("¿Cuántas remesas consecutivas quieres abrir?: "))
    for j in range(i):
        webbrowser.open(f"{url}0{code + j}#no-back-button")
    if type == "c":
        url = urls["masters"]["sender"]["change"]
        webbrowser.open(url)
        input()
        delete_cache_min(urls,manifiest,"no-back-button")
        input()
        search_manifiest(urls,manifiest,"ctl0_MainModule_EnviarMinisterio")
    else:
        pass