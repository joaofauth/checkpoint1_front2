let titulo = document.querySelector('#titulo');
let sinopse = document.querySelector('#sinopse');
let url = document.querySelector('#url');
let containerCard = document.querySelector("#containerCard");

let botaoEnviar = document.querySelector('#botaoEnviar');

botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault();
    callback();

})
function callback() {
    let card = `
                <div class="card m-2" style="width: 22rem;">
                    <img src="${url.value}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${titulo.value}</h5>
                        <p class="card-text">${sinopse.value}</p>
                    </div>
                </div>
                `

    let novoCard = document.createElement('div');
    novoCard.classList.add("novoCard")
    novoCard.innerHTML = card;
    containerCard.appendChild(novoCard);
}




