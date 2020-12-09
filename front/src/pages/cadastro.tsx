import React from 'react'
import {Container,Formulario,Conteudo,BodyForm} from '../styles/stylesPage/cadastroStyles'
import Imput from './inputs/input'
import Link from 'next/link'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField';
import Api from '../rotas/validar'
import Tel from '../assets/gatinho.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const avaliar = Yup.object().shape({
    name: Yup.string().min(3,"Nome insuficiente").required(),
    password_hash: Yup.string().min(8, "insuficiente").required().max(15, 'A quantidade máxima é 15'),
    email: Yup.string().email().required(),
    // nacionalidade_guia:Yup.string().required(t('FieldRequired')),
    confirmPassword: Yup.string().oneOf([Yup.ref('password_hash'), null],"senha incorreta").required(),
     // idade_guia:Yup.number().moreThan(17,t('AgeInputError')).required(t('FieldRequired')),
     // telefone_guia: Yup.string().required(t('FieldRequired'))
  })
  async function CadastroElementos (values) {
    const data = {
      name: values.name,
      email: values.email,
      password_hash: values.password_hash,
  
    }

    /** caso tenha algum problema com a conexão mostra o erro específico */
    try {
     alert("deu certo")
     const response = await Api.post('test', data)
     alert(JSON.stringify(response))
   
    } catch (err) {
      alert('Erro no estabelecer conexão. ' + err.response.data.message)
      console.log(data)
      alert('Erro no estabelecer conexão. ' + err)
    }
  }
const Cadastro : React.FC=()=>{
    return(
           <Container>
               <Conteudo>
                 <h1 className="h1mod">Faça o seu cadastro</h1>
                 <span className="spanmod">El que quisiere apurarse
     véngase muy sin temor
     a la Fragua del Amor.</span>
                  <Tel className="foto1"/>
                </Conteudo>
    <Formulario>
    <Formik
       initialValues={{ email: '', password_hash: '' ,name:'',confirmPassword:''}}
       validationSchema={avaliar}
       onSubmit={(values) => {
        CadastroElementos(values)
       }}
     >
       {({values, isSubmitting}) => (
         <Form>
             <BodyForm>
            <h1 className="text">Faça o seu cadastro</h1>
           <Field type="text" placeholder="Escreva o seu Nome" name="name"  className="formCampo input"/>
           <ErrorMessage name="name" className="formCampo" />
           <Field type="email" name="email" placeholder="Coloque o seu Email" className="formCampo input"/>
           <ErrorMessage name="email"  className="formCampo" />
           <Field type="password" name="password_hash" placeholder="Coloque a sua senha"  className="formCampo input"/>
           <ErrorMessage name="password_hash"  className="formCampo"/>
           <Field type="password" name="confirmPassword" placeholder="confirme a sua senha"  className="formCampo input"/>
           <ErrorMessage name="confirmPassword" className="formCampo"/>

           <button type="submit" disabled={isSubmitting} className="button">
             Submit
           </button>
           </BodyForm>
         </Form>
       )}
     </Formik> 
     <Link href='/'>
                   <a>Login</a>
    </Link>
    </Formulario>
             
            </Container>
    )
}
export default Cadastro