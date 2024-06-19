document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores do formulário
    const nome = document.getElementById('nome').value;
    const cnh = document.getElementById('cnh').value;
    const email = document.getElementById('email').value;
    // Obter outros valores do formulário conforme necessário

    const password = document.getElementById('password').value;

    // Objeto com os dados do cliente
    const dadosCliente = {
        nome: nome,
        cnh: cnh,
        email: email,
        // Outros campos do cliente aqui
        password: password
    };

    // Enviar solicitação POST para o backend
    fetch('/cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosCliente)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar cliente');
        }
        return response.json();
    })
    .then(data => {
        console.log('Cliente cadastrado com sucesso:', data);
        // Limpar formulário ou redirecionar para outra página, etc.
    })
    .catch(error => {
        console.error('Erro:', error);
        // Tratar erro (exibir mensagem de erro, etc.)
    });
});
