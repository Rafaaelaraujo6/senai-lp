const frm = document.querySelector("Form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    const Veiculo = frm.inVeiculo.value;
    const valor = frm.inValor.value;

    const entrada = (valor * 0.50);
    const parcela = (valor * 0.50) / 12;

    resp1.innerText = `Promoção : ${Veiculo}`
    resp2.innerText = `Entrada de R$:${entrada.toFixed(2)}`
    resp3.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault()
})