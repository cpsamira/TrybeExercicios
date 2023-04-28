import validator from 'validator';
import "./style.css";

// selecionar, pelos ids, os campos em nossa página
const campoDeTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');

button.addEventListener('click', (event) => {
  // para evitar que, ao clicar no botão, ele recarregue a página
  event.preventDefault();

  // criar objeto que as chaves são os tipos a serem validados
  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, 4),
    url: validator.isURL(campoDeTexto.value),
  };

  // O objeto 'campos' possui as chaves com o mesmo nome
  // das opções do seletor em nossa página. Assim, podemos
  // selecionar a chave de acordo com o selecionado no HTML
  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});