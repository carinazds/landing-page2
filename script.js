document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var nome = document.getElementsByName("nome")[0].value;
        var email = document.getElementsByName("email")[0].value;

        console.log("Nome: " + nome);
        console.log("Email: " + email);

        // Exibir uma mensagem de sucesso ao usuário
        const mensagem = document.createElement("p");
        mensagem.textContent = "Obrigado, " + nome + "! Sua planilha foi enviada para " + email + ".";
        mensagem.style.color = "#dfa041";
        mensagem.style.marginTop = "20px";
        form.parentNode.appendChild(mensagem);

        // Limpar os campos do formulário
        form.reset();

        // Desaparecer a mensagem após alguns segundos
        setTimeout(function() {
            mensagem.style.display = "none";
        }, 5000);
    });
});
