const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit" , (e) => {
    const produto = (frm.inProduto.value);
    const preco = (frm.inPreco.value)
    const total = (preco * 0.5) + (preco * 2)

    resp.innerText = `${produto} - Leve 3 por R$ ${total}
    o 3° produto sai por ${preco * 0.5}`
    e.preventDefault()
})