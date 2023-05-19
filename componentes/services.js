const atualizaRegistroCard = (id,categoria,produto,imagem,valor)=>{
  return fetch(`http://localhost:3000/bd/${id}`,{
    method:'PUT',
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
      return resposta.json()
    })  

}
const deletaRegistro = (id)=>{
  return fetch(`http://localhost:3000/bd/${id}`,{
    
    method:'DELETE'
   
  })
  
}
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

export {criaRegistro, atualizaRegistroCard,deletaRegistro}