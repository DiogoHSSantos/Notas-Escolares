const body = document.querySelector('body');
const claro = document.querySelector('.claro');
const escuro = document.querySelector('.escuro');
const botoes = document.querySelectorAll('.botao');

const nome = document.querySelector('#innome');
const nota = document.querySelector('#innumber');
const adicionar = document.querySelector('.adicionar')
const resultado = document.querySelector('.resultado')

claro.addEventListener('click', () => {
    body.style.background = "#f2f2f2"
    body.style.transition = ".3s"
})

escuro.addEventListener('click', () => {
    body.style.background = "#555555"
})


adicionar.addEventListener('click', () => {

    if(nota.value <= 10 && nota.value >= 8){
        nota.value = 'A';
    } else if(nota.value <= 7 && nota.value >= 5){
        nota.value = 'B'
    } else if(nota.value <= 4 && nota.value >= 2){
        nota.value = 'C'
    } else if(nota.value <= 1 && nota.value >= 0){
        nota.value = 'D'
    }
    
    if(nome.value == '' || nota.value == '' || nota.value > 10 ){
        alert('Digite valores válidos.')
    } else {
        resultado.innerHTML += `
        <p>O aluno(a) ${nome.value} tirou ${nota.value}</p>
        `
    }
    nome.value = '';
    nota.value = '';
})