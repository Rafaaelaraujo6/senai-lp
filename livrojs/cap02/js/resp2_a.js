const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inValor.value);
    const total = Math.floor(preco * 2);
    resp.innerText = `Promocao de ${medicamento}
    Leve 2 por apenas R$ ${total.toFixed(0)}`
    e.preventDefault()
});


