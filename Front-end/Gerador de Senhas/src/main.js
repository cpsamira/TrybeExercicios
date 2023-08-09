import { nanoid } from "nanoid";
import './style.css'
import copy from 'clipboard-copy';

const passwrdBTN = document.querySelector('button')
const displayPasswrdElement = document.querySelector('h2')

passwrdBTN.addEventListener('click', () => {
  displayPasswrdElement.innerHTML = nanoid()
});

displayPasswrdElement.addEventListener('click', (event)=> {
  copy(event.target.innerHTML);
  alert('Senha copiada para a área de transferência!');
});