const tamanho = document.getElementById('tamanho');
const slider = document.getElementById('slider');
const facilPronunciar = document.getElementById('facilPronunciar');
const facilLer = document.getElementById('facilLer');
const todosCaracter = document.getElementById('todosCaracter');
const maiscula = document.getElementById('maiscula');
const minuscula = document.getElementById('minuscula');
const number = document.getElementById('number');
const simbolos = document.getElementById('simbolos');
const gerarSenha = document.getElementById('gerarSenha');
const inputSenha = document.getElementById('senha');

window.onload = function(){
    slider.addEventListener('input', () => {
        tamanho.value = slider.value
    })

    tamanho.addEventListener('input', () =>{
        slider.value = tamanho.value
    })
}

const letrasM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letrasMi = 'abcdefghijklmnopqrstuvwxyz'
const caracteresSimbolos = '!@#$%^&*()_+{}[]<>?'

function gerarLetras(){
    
}
let senhaGerada = '';

function GerarSenha(){
    senhaGerada = '' 
    if (facilPronunciar.checked){
        // gerador de senha vai gerar senha maiuscula e minuscula
        if (maiscula.checked && minuscula.checked){
            let letras = letrasM + letrasMi
            for (let i = 1; i <= tamanho.value; i++){
                senhaGerada += letras.charAt(Math.floor(Math.random() * letras.length))
            }
        }
        // gerador de senha vai gerar senha maiuscula
        else if (maiscula.checked){
            for (let i = 1; i <= tamanho.value; i++){
                senhaGerada += letrasM.charAt(Math.floor(Math.random() * letrasM.length))
            }
        }
        // gerador de senha vai gerar senha minuscula
        else if(minuscula.checked){
            for (let i = 1; i <= tamanho.value; i++){
                senhaGerada += letrasMi.charAt(Math.floor(Math.random() * letrasMi.length))
            }
        }
       inputSenha.value = senhaGerada;
       number.disabled = true;
       simbolos.disabled = true;
    } 
}

gerarSenha.addEventListener('click', ()=>{
    GerarSenha()  
})

