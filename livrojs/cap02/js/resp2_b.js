const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const valor = (frm.inValor.value);
    const cliente = (frm.inCliente.value);
    const total = Number(valor*Math.ceil(cliente/15));

    resp.innerText = `Valor a pagar : R$ ${total.toFixed(2)}`
    e.preventDefault()
})