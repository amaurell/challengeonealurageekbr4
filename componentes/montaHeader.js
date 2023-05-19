const mostraHeader = (tmp)=>{
  let c =   `<header>
  <nav>
    <div class="box">
      <div class="box-direita">
        <img
          class="img-logo"
          src="./img/Logo_AluraGeek.png"
          alt="logo Alura"
        />
        <div class="input-lupa">
          <input type="text" placeholder="o que deseja encontrar" />
          <img src="./img/lupa.png" alt="" />
        </div>
      </div>
      <button class="btn-login">Login</button>
    </div>
  </nav>
</header>`
 tmp = c
 return tmp
}
export {mostraHeader}