// criar uma referencia ao form e ao h3 (onde será exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria um 'ouvinte' de evento, acionando quando o botao submit for clicado
frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value;
    resp.innerText = `Olá ${nome}`;
    e.preventDefault(); //vai evitar que o form envio os dados pro destino.php
})