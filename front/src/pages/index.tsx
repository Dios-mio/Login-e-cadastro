import React,{useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Api from '../rotas/validar'
import Cookies from 'js-cookie'
import {Container,Conteudo,Bloco} from '../styles/stylesPage/loginStyles'
import House from '../assets/tel.svg'
const Home: React.FC =()=> {
  const [valor, setValor] = useState(
    {
      email: '',
      password_hash: ''
    }
  )
  const OnSubmit = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setValor(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmitClick = (e) => {
    e.preventDefault()
  //pega os dados e manda para o backend, caso esteja tudo certo
  // entra no feed, caso contrário retorna uma mensagem de erro
    const data = {
      email: valor.email,
      password_hash: valor.password_hash
    }
    ///alert(data.email)
    try {
      Api.post('ver', data).then(function (response) {
        console.log(response.data.token)
        Cookies.set('Bearer', response.data.token)
        alert("deu certo")
      }).catch((err) => {
        console.log(err)
        alert("erro encontrado")
      })
    } catch (e) {
      alert("erro")
    }
  }
  return (
    <div>
      <Head>
        <title>Validação</title>
        
      </Head>

      <main >
       <Container>
         <Conteudo>
           <h2 className="text">Faça o seu login</h2>
           <form>
             <input type='text' placeholder="Email" onChange={OnSubmit} name="email" className="input"></input>
             <input type='password' placeholder="senha" onChange={OnSubmit} name="password_hash" className="input"></input>
             <button type='submit'  onClick={handleSubmitClick} className="button">Entrar</button>
           </form>
          
              <Link href='/cadastro'>
              <a>Cadastro</a>
            </Link>
           </Conteudo>
           <Bloco>
              <h1 className="h1Titulo">faça o seu login</h1>
              <span className="paragrafoTitulo">Foges-me, sabendo certo
que passo perigo</span>
              <House className="foto"/>
           </Bloco>
     
      </Container>
      </main>
    </div>
  )
}
export default Home