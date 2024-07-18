import resend

resend.api_key = "re_9FboEoQe_7iUthjgJYVVKrcfCoPux12xi"

r = resend.Emails.send({
  "from": "onboarding@resend.dev",
  "to": "practicante.ti@egakat.com",
  "subject": "Hello World",
  "html": """
  <div style='width:100%, color: white, background: red'>
      <h1>HELLO WORLD!</h1>
  </div>
  """
})
