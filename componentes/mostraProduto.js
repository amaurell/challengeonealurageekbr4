import { mostraAviso } from "./aviso.js"
import { atualizaRegistroCard } from "./services.js"

const pegaUrl = new URL(window.location)
const id = pegaUrl.searchParams.get('id')


const editaCampoCard = (id)=>{
  return fetch(`http://localhost:3000/bd/${id}`)
  .then(resposta=>{
  return resposta.json()

})
}

  let categoria = document.querySelector('.categoria')
  let produto = document.querySelector('.produto')
  let imagem = document.querySelector('.imagem')
  let valor = document.querySelector('.valor')

 

    editaCampoCard(id)
    .then(dados=>{
      categoria.value = dados.categoria
      produto.value = dados.produto
      imagem.value = dados.imagem
      valor.value = dados.valor
      
    })
  
 
const btnSubmit = document.querySelector('.btn')

btnSubmit.addEventListener('click',(evento)=>{
  evento.preventDefault()
  
  window.location.href = '../index.html'

})