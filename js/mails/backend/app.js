import { Resend } from 'resend';

const resend = new Resend('re_RYNoZZiA_MjzjTytTj1h3gXHzzL3AksoT');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'practicante.ti@egakat.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});