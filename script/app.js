const button = document.querySelector('.button-form');

button.addEventListener('click', function() {
    // Pega o valor do input
    let username = document.getElementById('username').value;

    if (!username) {
        alert('Por favor, insira um nome de usuário.');
        return; 
    }

    // Codifica o nome de usuário corretamente
    username = encodeURIComponent(username);
    
    // URL da API do GitHub
    let url = `https://api.github.com/users/${username}`;

    // Faz a requisição com fetch
    fetch(url)
    .then(response => {
        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro na Requisição: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        // Verifica se o usuário foi encontrado
        if (data.message === "Not Found") {
            alert('@@@@@ Usuário Não Encontrado! @@@@@');
        } else {
            // Captura os dados do perfil
            let name = data.name || 'Não informado';
            let location = data.location || 'Não informado';
            let bio = data.bio || 'Sem biografia';
            let followers = data.followers || 0;
            let following = data.following || 0;

            // Exibe os dados
            console.log(`Nome: ${name}`);
            alert(`Localização: ${location}`);
            alert(`Bio: ${bio}`);
            alert(`Seguidores: ${followers}`);
            alert(`Seguindo: ${following}`);
        }
    })
    .catch(error => {
        alert('Erro ao fazer a requisição: ' + error.message);
    });
});