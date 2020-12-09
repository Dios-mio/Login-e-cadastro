import styled, { keyframes } from 'styled-components'
const FormAnimation=keyframes`
from{
        opacity:0;
        transform:scale(0.9);
    }to {
        opacity;
        transform:scale(1);
    }
`
const Container=styled.div`
    display:flex;
    flex-direction:row;
   

`
const Conteudo=styled.div`
    width:50vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    animation:${FormAnimation} 2s ;
    .h1mod{
        color:#fff;
        margin-bottom:1rem;
    }
    .spanmod{
        color:#fff;
        margin-bottom:2rem;  
    }
    .foto1{
        width:35vw;
        height:40vh;
    }
    background:orange;

`
const Formulario=styled.div`
   animation:${FormAnimation} 2s ;
    display:flex;  
    flex-direction:column; 
    width:50vw;
    height:100vh;
    justify-content:center;
    align-items:center;
    background:var(--search);
    a{
        text-decoration:none;
    }
   
`
const BodyForm=styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    .text{
        font-size:1.3rem;
        margin-bottom:1rem;
    }
    .input{
        padding: 1rem 0 1rem 0;
        border-bottom:0.1rem solid #fff;
        outline:none;
        width:15rem;
    }
   .formCampo{
       color:#fff;
      
        padding: 1rem 0 1rem 0;
        border-bottom:0.1rem solid #fff;
        outline:none;
    }
   
    .button{
        border:0.1rem solid #fff;
        margin:1rem 0 1rem 0;
    }
    .button:hover {
        background:#fff;
        color:var(--search)
    }
   
`

export {Container,Formulario,Conteudo,BodyForm}