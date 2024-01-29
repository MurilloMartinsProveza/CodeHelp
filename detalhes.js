document.addEventListener('DOMContentLoaded', function () {
    // Obtém os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    const anuncioId = params.get('id');

    // Referenciando o banco de dados do Firebase
    var db = firebase.database().ref().child("CodeHelp");

    // Adicionando um ouvinte para o evento 'child_added'
    db.child(anuncioId).once('value').then(function(snapshot) {
        // Obtém os dados do anúncio
        const anuncio = snapshot.val();

        // Certifica-se de que 'anuncio' seja um objeto
        if (anuncio && typeof anuncio === 'object') {
            // Acessa as propriedades específicas do objeto (por exemplo, 'titulo' e 'descricao')
            const titulo = anuncio.titulo;
            const descricao = anuncio.descricao;

          
            var anuncioDetails = document.getElementById("anuncio-details");
            var novoAnuncio = document.createElement('div');
            novoAnuncio.classList.add('anuncio-details');
            novoAnuncio.innerHTML = `<img src="${anuncio.imagem}" alt="${titulo}">
                                    <h1>Título:</h1> 
                                    <h2>${titulo}</h2>
                
                                    <h1>Descrição:</h1> 
                                     <h4>${descricao}</h4>
                                     <div class="voltar">
                                         <a href="index.html">Voltar</a>
                                     </div>`;

            // Adiciona os detalhes do anúncio ao espaço reservado
            anuncioDetails.appendChild(novoAnuncio);
        }
    });
});
