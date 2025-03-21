let nascimento = document.querySelector("#Dt_nascimento");
let info = document.querySelector("#infos");
let nome = document.querySelector("#nome");
let cep = document.querySelector("#cep");
let cpf = document.querySelector("#cpf");

nascimento.addEventListener("click", function() {
    info.innerHTML = "Esse campo é para inserir a data de nascimento da pessoa";
});

nome.addEventListener("click", function() {
    info.innerHTML = "Esse campo é para inserir o nome da pessoa";
});

cep.addEventListener("click", function() {
    info.innerHTML = "Esse campo é para inserir o CEP da pessoa";
});

cpf.addEventListener("click", function() {
    info.innerHTML = "Esse campo é para inserir o CPF da pessoa";
});
