document.addEventListener('DOMContentLoaded', () => {
    fetchCarros();
    fetchVendas();

    document.getElementById('cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const dados = {
            id_veiculo: document.getElementById('carro').value,
            id_cliente: document.getElementById('id_cliente').value,
            data_venda: document.getElementById('data_venda').value,
            valor_venda: document.getElementById('valor_venda').value
        };

        fetch('http://localhost:3001/vendas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Erro ao cadastrar a venda.');
            })
            .then(() => {
                fetchVendas();
                alert('Venda cadastrada com sucesso!');
                document.getElementById('cadastroForm').reset();
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao cadastrar a venda. Verifique os dados e tente novamente.');
            });
    });
});

function fetchCarros() {
    fetch('http://localhost:3001/veiculos')
        .then(response => response.json())
        .then(data => {
            const selectCarro = document.getElementById('carro');

            data.forEach(carro => {
                const option = document.createElement('option');
                option.value = carro.id_veiculo;
                option.textContent = `${carro.marca_do_veiculo} ${carro.modelo_do_veiculo}`;
                selectCarro.appendChild(option);
            });
        })
        .catch(error => console.error('Erro:', error));
}

function fetchVendas() {
    fetch('http://localhost:3001/vendas')
        .then(response => response.json())
        .then(data => {
            const vendasSection = document.getElementById('vendas');
            vendasSection.innerHTML = '';

            data.forEach(venda => {
                const div = document.createElement('div');
                div.className = 'venda';
                const dataVenda = new Date(venda.data_venda).toLocaleDateString();
                const valorVenda = parseFloat(venda.valor_venda).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                });
                div.innerHTML = `
            <h3>ID: ${venda.id_vendas}</h3>
            <p>ID do Veículo: ${venda.id_veiculo}</p>
            <p>ID do Cliente: ${venda.id_cliente}</p>
            <p>Data da Venda: ${dataVenda}</p>
            <p>Valor da Venda: ${valorVenda}</p>
          `;
                vendasSection.appendChild(div);
            });
        })
        .catch(error => console.error('Erro:', error));
}
