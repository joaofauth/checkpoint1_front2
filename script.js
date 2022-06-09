let titulo = document.querySelector('#titulo');
let sinopse = document.querySelector('#sinopse');
let url = document.querySelector('#url');
let containerCard = document.querySelector("#containerCard");
let nota = document.querySelector("#nota");

let botaoEnviar = document.querySelector('#botaoEnviar');

botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault();
    callback();

})
function callback() {
    let card = `
                <div class="card me-3 mt-5  card-style" style="width: 20rem;">
                    <img src="${url.value}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title card-titulo"><b>${titulo.value}</b></h5>
                        <p class="card-text">${sinopse.value}</p>
                        <h class="card-text card-nota"><b>${nota.value}</b></h6>
                    </div>
                </div>
                `

    let novoCard = document.createElement('div');
    novoCard.classList.add("novoCard")
    novoCard.innerHTML = card;
    containerCard.appendChild(novoCard);
}




