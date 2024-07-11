import imaplib
import email
from email.header import decode_header

# Configura tu servidor de correo y credenciales
imap_server = "imap.gmail.com"  # Cambia esto por el servidor de tu proveedor de correo
email_user = "sipepsqiue@gmail.com"
email_pass = "jugodelimon1"

# Conéctate al servidor y accede a la bandeja de entrada
mail = imaplib.IMAP4_SSL(imap_server)
mail.login(email_user, email_pass)
mail.select("inbox")

# Busca correos no leídos
status, messages = mail.search(None, 'UNSEEN')

# Obtén una lista de IDs de correos no leídos
mail_ids = messages[0].split()

# Procesa cada correo
for mail_id in mail_ids:
    # Obtén el contenido del correo por ID
    status, data = mail.fetch(mail_id, "(RFC822)")
    for response_part in data:
        if isinstance(response_part, tuple):
            msg = email.message_from_bytes(response_part[1])
            subject, encoding = decode_header(msg["Subject"])[0]
            if isinstance(subject, bytes):
                # Si el asunto está en bytes, decodifícalo
                subject = subject.decode(encoding if encoding else "utf-8")
            print("Asunto:", subject)
            
            # De quién es el correo
            from_ = msg.get("From")
            print("De:", from_)

            # Si el correo tiene varias partes
            if msg.is_multipart():
                for part in msg.walk():
                    content_type = part.get_content_type()
                    content_disposition = str(part.get("Content-Disposition"))

                    try:
                        body = part.get_payload(decode=True).decode()
                    except:
                        pass

                    if content_type == "text/plain" and "attachment" not in content_disposition:
                        print("Cuerpo del correo:", body)
            else:
                content_type = msg.get_content_type()
                body = msg.get_payload(decode=True).decode()
                if content_type == "text/plain":
                    print("Cuerpo del correo:", body)

# Cierra la conexión
mail.close()
mail.logout()
