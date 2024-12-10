// Adiciona evento de envio ao formulário de contato
document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    alert("Mensagem enviada com sucesso! Obrigado pelo contato."); // Exibe mensagem de sucesso
});
