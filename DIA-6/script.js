var paulo  = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  
  var rafa = {
    nome: "Rafael",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  
  var maior = 0
  
  rafa.pontos = calculaPontos(rafa)
  paulo.pontos = calculaPontos(paulo)
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    if (pontos > maior) {maior = pontos}
    return pontos  
  }
  
  var jogadores = [rafa, paulo]
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
    console.log(maior)
    var html = ""  
      for(i = 0; i < jogadores.length ; i++){
       if (jogadores[i].pontos === maior && jogadores[i].pontos > 0) {html += "<tr style='background-color:green'><td>" + jogadores[i].nome + "</td>"} 
        else {
          html += "<tr><td>" + jogadores[i].nome + "</td>"
        }
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"    
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"    
    }
      html += "<tr><td colspan='7'><button onClick='adicionarEmpate()'>Empate</button></td></tr>"
    
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
      
  }
  
  function adicionarVitoria(i){
    jogadores[i].vitorias++
    jogadores[i].pontos = calculaPontos(jogadores[i])
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarEmpate(){
    for(i = 0; i < jogadores.length ; i++){
      jogadores[i].empates++
      jogadores[i].pontos = calculaPontos(jogadores[i])
     }
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarDerrota(i){
    jogadores[i].derrotas++  
    exibirJogadoresNaTela(jogadores)  
  }