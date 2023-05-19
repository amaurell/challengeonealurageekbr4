function mostraAviso(){
  let mensagem = document.querySelector('.msgDesligada')
  function avisoLigado(){
    
    mensagem.setAttribute('class','msgLigada')
    
  }
  function avisoDesligado(){
    mensagem.setAttribute('class','msgDesligada')
  }
  avisoLigado()

  //Configura o tempo de exibição "não aceita campos vazios"
  setTimeout(avisoDesligado, 2000)
  
}
function mostraErroSintaxe(){
  let mensagem = document.querySelector('.erroSintaxeLigada')
  function erroSintaxeLigada(){
    
    mensagem.setAttribute('class','erroSintaxeLigada')
    
  }
  function erroSintaxeDesligada(){
    mensagem.setAttribute('class','erroSintaxeDesligada')
  }
  avisoLigado()

  //Configura o tempo de exibição "não aceita campos vazios"
  setTimeout(avisoDesligado, 2000)
  
}

export {mostraAviso}