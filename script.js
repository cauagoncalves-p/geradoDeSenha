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
const numeros = '1234567890';
const caracteresSimbolos = '!@#$%^&*()_+{}[]<>?'
function GerarSenha(){
    let senhaGerada = '';
    let embaralhar = '';   
        if (maiscula.checked){
            embaralhar = letrasM;
        }
        if (minuscula.checked){
            embaralhar += letrasMi;
        }
        if (simbolos.checked){
            embaralhar += caracteresSimbolos;
        } 
        if (number.checked){
            embaralhar += numeros;
        }
        for (let i = 0; i < tamanho.value; i++){
            senhaGerada += embaralhar.charAt(Math.floor(Math.random() * embaralhar.length));
        }
        inputSenha.value = senhaGerada;
}

facilPronunciar.addEventListener('change', (event) =>{
    if (event.target.checked){
        number.disabled = true, number.checked = false;
        simbolos.disabled = true, simbolos.checked = false;
    }
})

facilLer.addEventListener('change', (event)=>{
    if (event.target.checked){
        number.disabled = false, number.checked = false; 
        simbolos.disabled = false, simbolos.checked = false      
    }
})

todosCaracter.addEventListener('change', (event) =>{
     if (event.target.checked){
        number.checked = true; 
        simbolos.checked = true;
        minuscula.checked = true;
        maiscula.checked = true;
    }
})



gerarSenha.addEventListener('click', ()=>{
 GerarSenha();
})
