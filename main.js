const form = document.getElementById("form-calculo");

form.addEventListener("submit", function(e){
    let valorA = parseInt(document.getElementById("campo-a").value);
    let valorB = parseInt(document.getElementById("campo-b").value);
    let formValido = (valorB > valorA);
    let mensagem = `O valor do campo B: ${valorB} é maior que o valor do campo A: ${valorA}, portanto o formulário é válido!`
    
    e.preventDefault();
    
    if(!formValido){
        mensagem = `O valor do campo A: ${valorA} é maior que o valor do campo B: ${valorB}, portanto o formulário é inválido!`
    }

    alert(mensagem);
})