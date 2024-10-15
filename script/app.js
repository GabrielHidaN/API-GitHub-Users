
// Solicita o nome de usuário ao usuário
const pesquisarUser = ()=>{
// Solicita o nome de usuário ao usuário
    let username = encodeURIComponent(document.getElementsByClassName('username').value);
// URL da API do GitHub
    let url = `https://api.github.com/users/${username}`;

    if (!username) {
        alert('Por favor, insira um nome de usuário.');
        return; 
    }


    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error('Erro na Requisição: ' + response.status);
        }
        return response.json();
    }) // Converte a resposta para JSON

    .then(data => {
        if (data.message !== "Not Found") {
            // Limpa a tela (em navegadores não há um comando como `cls`, então omitido)


            // Captura os dados do perfil
            let name = data.name || 'Não informado';
            let location = data.location || 'Não informado';
            let bio = data.bio || 'Sem biografia';
            let followers = data.followers || 0;
            let following = data.following || 0;

            // Exibe os dados

            alert(`Nome: ${name}`);
            alert(`Localização: ${location}`);
            alert(`Bio: ${bio}`);
            alert(`Seguidores: ${followers}`);
            alert(`Seguindo: ${following}`);
        } else {

            alert('@@@@@ Usuário Não Encontrado! @@@@@');
        }
    })
    .catch(error => {
        alert('Erro ao fazer a requisição:', error);
    });

}

const button = document.querySelector('.button-form').addEventListener('click' , pesquisarUser);