
function limpar(){
    campos = document.getElementsByClassName("submit")
    Array.from(campos).forEach(function(element){
        element.value = ""
    });
}

document.getElementById('celular').addEventListener('input', function (e) {
    // Remove tudo que não seja número
    let valor = e.target.value.replace(/\D/g, '');

    // Formata o valor no padrão (XX) XXXXX-XXXX
    if (valor.length > 0) {
        valor = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7, 11);
    }

    // Limita ao máximo de 11 dígitos
    e.target.value = valor.substring(0, 15);
});