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
const Input =styled.input`
    width:25rem;
    height:1.8rem;
    background:#fff;
    margin:1rem 0 1rem 0;
    border-radius:1rem;
    color:black;
`
const Bloco=styled.div`
    width:50vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    .h1Titulo{
        color:var(--search);
        margin-bottom:1rem;
    }
    .paragrafoTitulo{
        color:var(--search);
        margin-bottom:1rem;
    }
    .foto{
        width:35vw;
        height:40vh;
    }
    animation:${FormAnimation} 2s ;
`
const Conteudo=styled.div`
 animation:${FormAnimation} 4s ;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:50vw;
    height:100vh;
    background:var(--search);
    .text{
        padding-bottom:1rem;
        font-size:1.4rem;
    }
    .input{
        padding: 1rem 0 1rem 0;
        border-bottom:0.1rem solid #fff;
        outline:none;
        width:15rem;
    }form{
        display:flex;
        flex-direction:column;
    }
    .button{
        border:0.1rem solid #fff;
        margin:1rem 0 1rem 0;
    }
    .button:hover {
        background:#fff;
        color:var(--search)
    }
    a{
        text-decoration:none;
    }
`
export {Container,Input,Bloco,Conteudo}