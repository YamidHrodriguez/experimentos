from config.url_base import url_base

def urls():
    
    # URL que quieres abrir
    urls =  {
        "home": f"{url_base}#no-back-button",
        "ship": {
            "shipment": {
                "form": f"{url_base}page=Despacho.Remesa_003.Home_010#no-back-button",
                "search": f"{url_base}page=Despacho.Remesa_003.Home_010&remesa_codigo=",
            },
            "manifiest": {
                "form": f"{url_base}page=Despacho.Manifiesto_003.Home_010&",
                "DeleteCacheMin": f"{url_base}page=Despacho.Manifiesto_003.BorrarCacheMinisterio#no-back-button"
            }
        },
        "basics": {
            "users": {
                "create": f"{url_base}page=Basicos.Usuario.Home#no-back-button"
            }
        },
        "masters": {
            "sender": {
                "change": f"{url_base}page=Maestros.Remitente.CambioInformacion#no-back-button"
            }
        }
    }
    return urls