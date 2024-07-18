import React, { useState } from 'react';
import axios from 'axios';
import {resend} from 'resend'


function App() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const resend = new.resend()

  return (
    <form action="https://formsubmit.co/horaciohabbos@gmail.com" method="POST">
     <input type="text" name="name" required></input>
     <input type="email" name="email" required></input>
     <button type="submit">Send</button>
    </form>
    );
}

export default App;
