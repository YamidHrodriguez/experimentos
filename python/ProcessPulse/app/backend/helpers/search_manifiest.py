import webbrowser

def search_manifiest(urls,manifiest,id):
    webbrowser.open(f"{urls['ship']['manifiest']['form']}manifiesto_codigo=0{manifiest}#{id}")
