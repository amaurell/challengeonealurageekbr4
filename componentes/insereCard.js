import { criaRegistro } from "./services.js"
import { mostraAviso } from "./aviso.js"

let pegaInsere = document.querySelector('.btn')




pegaInsere.addEventListener('click',(evento)=>{
 
  evento.preventDefault()

  const categoria = String(document.querySelector('.categoria').value).toLowerCase()
  let produto = document.querySelector('.produto').value
  let imagem = document.querySelector('.imagem').value
  let valor = document.querySelector('.valor').value
 

  //Chama rotina no 'services.js'
  if((categoria !=="" && produto !=="" && imagem !=="" && valor !=="") && (categoria == 'starwars' || categoria == 'consoles' || categoria =="diversos")) {
   
    criaRegistro(categoria,produto,imagem,valor)
    .then(()=>{
    
      window.location.href="../index.html"
    })
  }else {
    mostraAviso()
  }

  
   
})




pegaInsere.addEventListener('click',(evento)=>{
  evento.preventDefault()
  const categoria = document.querySelector('.categoria').value
  const produto = document.querySelector('.produto').value
  const imagem = document.querySelector('.imagem').value
  const valor = document.querySelector('.valor').value

  

  const criaRegistro = (categoria,produto,imagem,valor)=>{
    return fetch(`http://localhost:3000/bd`,{
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'},
        body: JSON.stringify({
          categoria : categoria,
          produto: produto,
          imagem: imagem,
          valor:valor
        })
    })  

      .then(resposta =>{
        return resposta.body
      })  
  
  }
 })
 export {pegaInsere}