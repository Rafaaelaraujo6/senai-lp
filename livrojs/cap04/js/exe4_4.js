const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit",(e)=> {
    e.preventDefault()
    const hrBrasil= Number(frm.inHoraBrasil.value)

    let hrFranca = hrBrasil + 5
    if (hrFranca > 24) {hrFranca = hrFranca - 24}

    resp.innerText = `Hora na França ${hrFranca.toFixed(2)}`
})