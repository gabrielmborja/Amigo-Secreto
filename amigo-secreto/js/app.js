let listaAmigo = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo == '') {
        alert('Digite o nome do amigo!');
        return;
    }

    if (listaAmigo.includes(nomeAmigo)) {
        alert('Nome já adicionado!');
        return;
    }

    let amigosIncluidos = document.getElementById('lista-amigos');
    document.getElementById('nome-amigo').value = '';
    listaAmigo.push(nomeAmigo);
    amigosIncluidos.textContent = listaAmigo.join(', ');
}

function sortear() {

    if (listaAmigo.length < 4) {
            alert('Adicione pelo menos 4 amigos!');
            return;
        }

    embaralha(listaAmigo);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaAmigo.length; i++) {
        if ( i == listaAmigo.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + listaAmigo[i] + '--> ' + listaAmigo[0] + '<br>';
        }else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigo[i] + '--> ' + listaAmigo[i + 1] + '<br>';
        }
    }

    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('nome-amigo').textContent = '';
    listaAmigo = [];

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    listaAmigo = [];
}