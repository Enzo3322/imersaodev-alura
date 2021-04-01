var cartas = carregarDeck()
var cartaJogador
var cartaMaquina

// Sorteia cartas para o jogador e a máquina
function sortearCartas() {
    cartaJogador = sortearCarta()
    cartaMaquina = sortearCarta()
    while (cartaJogador.nome == cartaMaquina.nome) {
        cartaMaquina = sortearCarta()
    }

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exibeCarta(cartaJogador, "carta-jogador")
}

// Sorteia uma nova carta
function sortearCarta() {
    var numeroCarta = Math.floor(Math.random() * cartas.length)
    return cartas[numeroCarta]
}

function jogar() {
    var atributo = atributoSelecionado()
    var atributoJogador = cartaJogador.atributos[atributo]
    var atributoMaquina = cartaMaquina.atributos[atributo]
    var resultado = "Empatou!"
    if (atributoJogador > atributoMaquina) {
        resultado = "Você venceu"
    } else if (atributoJogador < atributoMaquina) {
        resultado = "Você perdeu"
    }

    exibeCarta(cartaMaquina, "carta-maquina", statusEmTexto)
    exibeResultado(resultado)
}

// Retorna o atributo selecionado pelo jogador
function atributoSelecionado() {
    var atributos = document.getElementsByName("atributo")
    for (var i = 0; i < atributos.length; i++) {
        if (atributos[i].checked) {
            return atributos[i].value
        }
    }
}

// Exibe o resultado para o jogador
function exibeResultado(resultado) {
    var divResultado = document.getElementById("resultado")
    divResultado.innerHTML = "<p class='resultado-final'>" + resultado + "</p>"
}

/* Exibe uma carta na "divId".
 * Permite alterar a forma em que o status é exibido usando "tipoStatus" */
function exibeCarta(carta, divId, tipoStatus=statusComoInput) {
    var divCarta = document.getElementById(divId)
    
    var moldura = document.getElementById("moldura").outerHTML
    var nome = `<p class="carta-subtitle">${carta.nome}</p>`
    var status = geraStatus(carta, tipoStatus)

    divCarta.style.backgroundImage = `url(${carta.imagem})`
    divCarta.innerHTML = moldura + nome + status
}

// Retorna uma div com o status da carta de acordo com "tipoStatus"
function geraStatus(carta, tipoStatus) {
    var status = "<div id='opcoes' class='carta-status'>"
    for (var atributo in carta.atributos) {
        status += tipoStatus(atributo, carta.atributos[atributo])
    }
    return status += "</div>"
}

// Retorna a tag HTML para exibir um input
function statusComoInput(atributo, valor) {
    return "<input type='radio' name='atributo' value='" + atributo + "'>"
        + atributo.toUpperCase() + ": " + valor + "<br>"
}

// Retorna a tag HTML para exibir um texto
function statusEmTexto(atributo, valor) {
    return "<p type='text' name='atributo' value='" + atributo + "'>"
        + atributo.toUpperCase() + ": " + valor + "<br>"
}


// Retorna um deck de cartas
function carregarDeck() {
    resetaCartas()
    return [criarCarta("Goku", "https://i0.wp.com/shop.columbadev.com.br/wp-content/uploads/2021/01/goku-gif.gif?fit=750%2C750&ssl=1", 82, 70, 8500),
            criarCarta("Majin Boo", "https://images6.fanpop.com/image/photos/35300000/-DBZ-dragon-ball-z-35367800-500-276.gif", 80, 75, 8120),
            criarCarta("Trunks do Futuro", "https://i.pinimg.com/originals/e9/9e/12/e99e126d10fbf4b9b84783b033e6a4d2.gif", 80, 77, 8344),
            criarCarta("Vegeta", "https://i.pinimg.com/originals/04/66/8f/04668f3125b10214da2c793e5e4a7c06.gif", 81, 70, 8250),
            criarCarta("Piccolo", "https://i.gifer.com/94Ov.gif", 78, 75, 7650),
            criarCarta("Gohan", "https://giffiles.alphacoders.com/141/14108.gif", 79, 73, 8231),
            criarCarta("Androide 18", "https://images6.fanpop.com/image/photos/40600000/-Android-18-dragon-ball-z-40627492-500-261.gif", 77, 70, 7655)]
}

// Cria uma nova carta
function criarCarta(nome, imagem, ataque, defesa, ki) {
    return {
        nome: nome,
        imagem: imagem,
        atributos: {
            ataque: ataque,
            defesa: defesa,
            ki: ki
        }
    }
}

function resetaCartas() {
    var cartaPadrao = criarCarta("???", "https://wallpapercave.com/wp/wp2686927.jpg", "???", "???", "???")
    exibeCarta(cartaPadrao, "carta-jogador", statusEmTexto)
    exibeCarta(cartaPadrao, "carta-maquina", statusEmTexto)
}
