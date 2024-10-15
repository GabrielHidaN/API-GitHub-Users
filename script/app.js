const pesquisarUser = ()=>{
    var valor = document.getElementById("username").value;
    if(valor.length == 0){
        alert("você nao pode deixar o campo vazio")
    }
    else{
        alert("O valor inserido é: " + valor);
    }

}