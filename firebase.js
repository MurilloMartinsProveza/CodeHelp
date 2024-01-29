// Configuração do Firebase com as credenciais do projeto
const firebaseConfig = {
    apiKey: "AIzaSyCG1sWceOX3QZUxbXWc3MsJbznwIc_r7Ls",
    authDomain: "codehelp-f723b.firebaseapp.com",
    databaseURL: "https://codehelp-f723b-default-rtdb.firebaseio.com",
    projectId: "codehelp-f723b",
    storageBucket: "codehelp-f723b.appspot.com",
    messagingSenderId: "261262850197",
    appId: "1:261262850197:web:ff89d9ede182e9198a039c",
    measurementId: "G-6ELVMSH0HM"
};

// Inicializa o Firebase com a configuração fornecida
firebase.initializeApp(firebaseConfig);

// Aguarde o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Obtém a referência ao elemento div_lista
    var var_lista = document.getElementById("div_lista");

    // Referenciando o banco de dados do Firebase
    var db = firebase.database().ref().child("CodeHelp");

    // Adicionando um ouvinte para o evento 'child_added'
    db.on('child_added', function(snapshot) {
        // Obtém os dados adicionados
        const adicionado = snapshot.val();

        // Certifica-se de que 'adicionado' seja um objeto
        if (adicionado && typeof adicionado === 'object') {
            // Acesse as propriedades específicas do objeto (por exemplo, 'titulo' e 'descricao')
            const titulo = adicionado.titulo;
            const descricao = adicionado.descricao;

            // Construa o HTML usando as propriedades específicas
            var novoAnuncio = document.createElement('div');
            novoAnuncio.classList.add('anuncio');
            novoAnuncio.innerHTML = `<h1>Título do projeto:</h1><h3>${titulo}</h3><br><h1>Descrição:</h1><p>${descricao}</p>`;
            
            // Cria um botão de detalhes
            var botaoDetalhes = document.createElement('button');
            botaoDetalhes.classList.add('detalhes');
            botaoDetalhes.textContent = 'Detalhes';
            botaoDetalhes.addEventListener('click', function() {
                // Redireciona para a página de detalhes passando o ID ou outras informações necessárias
                window.location.href = 'detalhes.html?id=' + snapshot.key;
            });
            
            // Adiciona o botão de detalhes ao novo anúncio
            novoAnuncio.appendChild(botaoDetalhes);

            // Adiciona o novo anúncio à lista
            var_lista.appendChild(novoAnuncio);

            console.log(adicionado);
        }
    });
});
