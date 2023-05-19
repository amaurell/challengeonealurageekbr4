const rodape = (tmp)=>{
  let e = 
  `<footer class="rodape">
      <section><img src="../img/Logo_AluraGeek.png" alt="" /></section>
        <section class="info">
          <a class="info-link" href="#">Quem somos nós</a>
          <a class="info-link" href="#">Política de privacidade</a>
          <a class="info-link" href="#">Programa Fidelidade</a>
          <a class="info-link" href="#">Nossas lojas</a>
          <a class="info-link" href="#">Quero ser franqueado</a>
          <a class="info-link" href="#">Anuncie aqui</a>
        </section>
        <section class="rodape-form">
            <p>Fale conosco</p>
            <form action="#">
              <div class='form-nome'>
                    <label class="nome" for="#">Nome</label>
                    <input type="text" value="Andre Babo" />
                </<div>
                <textarea class="textoArea" placeholder="Escreva sua mensagem"></textarea>
            </form>
            <button class="btn-rodape">Enviar Mensagem</button>
        </section>
    </footer>`
    tmp = e
    return tmp
}
export {rodape}