
import { mostraHeader } from "./componentes/montaHeader.js"
import { mostraBanner} from "./componentes/montaBanner.js"
import { rodape } from "./componentes/montaFooter.js"
import { copyRight } from "./componentes/montaCopyright.js"
import { deletaRegistro } from "./componentes/services.js"




let categoria = []
let produto = []
let valor =[]
let id = []
let link = []
let tagP 
let tagLi
let tagImg
let linkImagem
let tagLink
let tagSpan
let tagSpanId
let tamanho
let tagSpanEdita

fetch(`http://localhost:3000/bd/${id}`).then(resposta=>{
  return resposta.json()
}).then(corpo=>{
  
  let pegaLista = document.querySelector('.block-one')
  let pegaListaConsoles = document.querySelector('.block-two')
  let pegaListaDiversos = document.querySelector('.block-three')
  
  
 
 
 //Transforma nodelist em array
  let pegaLinkInsere =Array.from(document.querySelectorAll('.insere'))  

  // Coloca ícone '+' (inserir card)
  pegaLinkInsere.map(function(posicaoArray,i){
  pegaLinkInsere[i].innerHTML = '<img width="32" height="32" src="https://img.icons8.com/windows/32/filled-plus-2-math.png" alt="filled-plus-2-math"/>'
 })
  
  

  corpo.map((evento,indice)=>{


    if(evento.categoria==="starwars"){
    



    tagLi = document.createElement('li')
    tagLi.classList.add('box-card')
 
    pegaLista.appendChild(tagLi)
    
    
    
    
    // Cria a 'img'
    tagImg = document.createElement('img')
    tagImg.classList.add('img-box-card')
    indice++
    linkImagem = evento.imagem
    linkImagem = `./img/${linkImagem}.png`
    tagImg.setAttribute('src',linkImagem)
    tagLi.appendChild(tagImg)

    // Cria texto 'produto'
    produto[indice] = evento.produto
    tagP = document.createElement('p')
    tagP.classList.add('produto')
    tagP.innerHTML=`${produto[indice]}<br>`
    tagLi.appendChild(tagP)

    // Cria texto 'valor'
    valor[indice]= evento.valor
    tagP = document.createElement('p')
    tagP.classList.add('valor')
    tagP.innerHTML=`R$ ${valor[indice]},00<br>`
    tagLi.appendChild(tagP)

    // Cria link 
    id[indice] = evento.id
    tagLink = document.createElement('a')
    tagLink.classList.add('link')
    tagLink.setAttribute('href',`./telas/mostraProduto.html?id=${id[indice]}`)
    tagLink.innerHTML="Ver Produto"
    tagLi.appendChild(tagLink)
      
   
    // Cria ícone lixeira
    tagSpan = document.createElement('img')
    tagSpan.classList.add('deleta'+(id[indice]))
    
    tamanho = id[indice]+6
    
    tagSpan.innerHTML="data-img"
    tagSpan.setAttribute('src','https://img.icons8.com/windows/32/trash.png')
   
    tagP.appendChild(tagSpan)
    

   
    

  

    tagSpanEdita = document.createElement('a')
   
    tagSpanEdita.setAttribute('href',`./telas/editaCard.html?id=${id[indice]}`)
    tagSpanEdita.innerHTML='<img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/pen.png" alt="pen"/>'
    
    
    tagLink.appendChild(tagSpanEdita)
    pegaLista.appendChild(tagLi)
    }

    if(evento.categoria==="consoles"){


      tagLi = document.createElement('li')
      tagLi.classList.add('box-card')
   
      pegaListaConsoles.appendChild(tagLi)

      
      
      // Cria a 'img'
      tagImg = document.createElement('img')
      tagImg.classList.add('img-box-card')
      indice++
      linkImagem = evento.imagem
      linkImagem = `./img/${linkImagem}.png`
      tagImg.setAttribute('src',linkImagem)
      tagLi.appendChild(tagImg)
  
      // Cria texto 'produto'
      produto[indice] = evento.produto
      tagP = document.createElement('p')
      tagP.classList.add('produto')
      tagP.innerHTML=`${produto[indice]}<br>`
      tagLi.appendChild(tagP)
  
      // Cria texto 'valor'
      valor[indice]= evento.valor
      tagP = document.createElement('p')
      tagP.classList.add('valor')
      tagP.innerHTML=`R$ ${valor[indice]},00<br>`
      tagLi.appendChild(tagP)
  
      // Cria link 
      tagLink = document.createElement('a')
      tagLink.classList.add('link')
      tagLink.setAttribute('href','#')
      tagLink.innerHTML="Ver Produto"
      tagLi.appendChild(tagLink)
  
  
      tagSpanId = document.createElement('span')
      id[indice] = evento.id
      
      tagSpanId.id =id[indice]
      tagSpanId.innerHTML = id[indice]
   
  
      tagSpan = document.createElement('img')
      tagSpan.classList.add('deleta'+(id[indice]))
      
      tamanho = id[indice]+6
      tagSpan.setAttribute('src','https://img.icons8.com/windows/32/trash.png')
      tagP.appendChild(tagSpan)
  
     
      tagSpanEdita = document.createElement('a')
     
      tagSpanEdita.setAttribute('href',`./telas/editaCard.html?id=${id[indice]}`)
      tagSpanEdita.innerHTML='<img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/pen.png" alt="pen"/>'
      tagLink.appendChild(tagSpanEdita)
      pegaListaConsoles.appendChild(tagLi)
      }


      if(evento.categoria==="diversos"){
    
        tagLi = document.createElement('li')
        tagLi.classList.add('box-card')
     
        pegaListaDiversos.appendChild(tagLi)
    
        // Cria a 'img'
        tagImg = document.createElement('img')
        tagImg.classList.add('img-box-card')
        indice++
        linkImagem = evento.imagem
        linkImagem = `./img/${linkImagem}.png`
        tagImg.setAttribute('src',linkImagem)
        tagLi.appendChild(tagImg)
    
        // Cria texto 'produto'
        produto[indice] = evento.produto
        tagP = document.createElement('p')
        tagP.classList.add('produto')
        tagP.innerHTML=`${produto[indice]}<br>`
        tagLi.appendChild(tagP)
    
        // Cria texto 'valor'
        valor[indice]= evento.valor
        tagP = document.createElement('p')
        tagP.classList.add('valor')
        tagP.innerHTML=`R$ ${valor[indice]},00<br>`
        tagLi.appendChild(tagP)
    
        // Cria link 
        tagLink = document.createElement('a')
        tagLink.classList.add('link')
        tagLink.setAttribute('href','#')
        tagLink.innerHTML="Ver Produto"
        tagLi.appendChild(tagLink)
    
    
        tagSpanId = document.createElement('span')
        id[indice] = evento.id
        
        tagSpanId.id =id[indice]
        tagSpanId.innerHTML = id[indice]
     
    
        tagSpan = document.createElement('img')
        tagSpan.classList.add('deleta'+(id[indice]))
        
        tamanho = id[indice]+6
        
        tagSpan.setAttribute('src','https://img.icons8.com/windows/32/trash.png')
        tagP.appendChild(tagSpan)
        
    
       
        tagSpanEdita = document.createElement('a')
       
        tagSpanEdita.setAttribute('href',`./telas/editaCard.html?id=${id[indice]}`)
        tagSpanEdita.innerHTML='<img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/pen.png" alt="pen"/>'
        tagLink.appendChild(tagSpanEdita)
        pegaListaDiversos.appendChild(tagLi)
        }
  

    
    
  })


  let pegaDeleta = addEventListener("click",pegaClick)

  function pegaClick(evento){
      let deletar
      let validacao
      
      validacao = (evento.target.className)
      deletar  = validacao.substring(0,6)
  
      if(deletar !== "deleta"){
        window.location.href='./index.html'
      }else {
           //Retira o número dentro da variável 'validacao'
           const ourNumber = Number(validacao. match(/\d+/)[0])
           deletaRegistro(ourNumber).then(()=>{
             window.location.href='./index.html'
         })
      }
     
  
}
  

  
 

    
  

})















const mostraCabecalho = mostraHeader()
const mostraFigura = mostraBanner()
const mostraFooter = rodape()
const mostraCopyRight = copyRight()

const modulo  = document.querySelector('.principal')
const banner = document.querySelector('.banner')
const starwars = document.querySelector('.starwars')
const modulo02 = document.querySelector('.consoles')


const footer = document.querySelector('.footer')
const copyright= document.querySelector('.copyright')

modulo.innerHTML = mostraCabecalho
banner.innerHTML = mostraFigura
footer.innerHTML = mostraFooter
copyright.innerHTML = mostraCopyRight
