$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<li style="display:none">${nomeTarefa}</li>`)
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('');
    })

    $('li').click(function(){
        $(this).toggleClass('checked');
    })
})