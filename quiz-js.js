
function verificar(){
    var resp = document.getElementById('res-1')
    var radios = document.querySelector('input[name="qst-1"]:checked').value;
    if(document.getElementById('brasil').checked){
        resp.innerHTML= 'Resposta: Você acertou!! O Brasil ganhou 5 vezes a taça'
        
    }
    else{
        resp.innerHTML='Resposta: Você errou!! A resposta correta é Brasil'
    }
    
}



function calcular(){
    var resp = document.getElementById('res-2')
    var radios = document.querySelector('input[name="qst-2"]:checked').value;
    if(document.getElementById('realmadrid').checked){
        resp.innerHTML= 'Resposta: Você acertou!! O Real Madrid ganhou 13 vezes a taça'
    }else{
        resp.innerHTML= 'Resposta: Você errou!! A resposta correta é Real Madrid'
    }
}



function informar(){
    var resp =document.getElementById('res-3')
    var radios = document.querySelector('input[name="qst-3"]:checked').value;
    if(document.getElementById('atleticomineiro').checked){
        resp.innerHTML= 'Resposta: Você acertou!! O Atlético Mineiro se tornou bicampeão brasileiro '
    }else{
        resp.innerHTML= 'Resposta: Você errou!! O último campeão brasileiro da séria A foi o Atlético Mineiro'
    }
    
}



function mostrar(){
    var resp= document.getElementById('res-4')
    var radios = document.querySelector('input[name="qst-4"]:checked').value;
    if(document.getElementById('marta').checked){
        resp.innerHTML= 'Resposta: Você acertou!! A jogadora Marta é conhecida como "Rainha do futebol" com 6 prêmios de melhor futebolista do mundo'
    }else{
        resp.innerHTML= 'Resposta: Você errou!! A jogadora conhecida como "Rainha do futebol" é a brasileira Marta Vieria'
    }
}