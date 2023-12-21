const btn_generator = document.querySelector("#btn_generator")
const btn_mostrar_senha = document.querySelector("#btn_submit")

async function gerarUsuario(e) {
  e.preventDefault()
  const url = "https://randomuser.me/api/"
  const data = await fetch(url)
  const response = await data.json()

  const results = response.results[0].login
  const email = response.results[0].email

  // desestrurando o objeto 
  const { username, uuid, password } = results

  preencherFormualario({
    id: uuid,
    usuario: username,
    email: email,
    senha: password
  })
}

function preencherFormualario({id, usuario, email, senha}){
  const idUser = document.querySelector("[data-input='id']")
  const username = document.querySelector("[data-input='username']")
  const emailUser = document.querySelector("[data-input='email']")
  const senhaUser = document.querySelector("[data-input='senha']")

  idUser.value = id
  username.value = usuario
  emailUser.value = email
  senhaUser.value = senha
}

function mostraSenha(e){
  e.preventDefault()
  const senhaUser = document.querySelector("[data-input='senha']")
  if(senhaUser.getAttribute("type") === 'password'){
    senhaUser.setAttribute("type", 'text')
    btn_mostrar_senha.innerText = "Ocultar senha"
  }else{
    senhaUser.setAttribute("type", 'password')
    btn_mostrar_senha.innerText = "Mostrar senha"
  }
}

btn_generator.addEventListener("click", gerarUsuario)
btn_mostrar_senha.addEventListener("click", mostraSenha)