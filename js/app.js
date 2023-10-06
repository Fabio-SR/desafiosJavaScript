let amigos = [];
let exibeLista = document.getElementById('lista-amigos');

function adicionar () {
    let nome = document.getElementById('nome-amigo').value;
    if( nome == '') {
        alert('Não é possível inserir vazio!');
        return;
    }
    nome = nome.toUpperCase();
    if (amigos.includes(nome)){
        alert('O nome informado já foi inserido!');
        return;
    }
    amigos.push(nome);
    if (exibeLista.textContent=='') {
        exibeLista.textContent = nome;
    }else {
        exibeLista.textContent = exibeLista.textContent + ', ' + nome;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear () {
    if(amigos.length <=3){
        alert('É necessário pelo menos 4 nomes para realizar o sorteio!');
        return;
    } 
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++){
    
        if (i == amigos.length -1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -> ' + amigos[0];
        }else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha (lista) {
    
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring 
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}