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

// Referência ao nó 'CodeHelp' no banco de dados
var contratarDB = firebase.database().ref('CodeHelp');

// Adiciona um ouvinte de evento de envio de formulário ao elemento com o ID 'CodeHelp'
document.getElementById('CodeHelp').addEventListener('submit', submitForm);

// Função chamada quando o formulário é enviado
function submitForm(e){
    e.preventDefault(); // Impede o comportamento padrão do formulário

    // Obtém os valores dos campos do formulário
    var titulo = getElementVal('titulo'); 
    var descricao = getElementVal('descricao');
    var contato = getElementVal('contato');

    // Salva os dados no banco de dados
    saveDescription(titulo, descricao, contato);

    // Exibe um alerta
    document.querySelector('.alerta').style.display = "block";

    // Remove o alerta após 5 segundos
    setTimeout(() => {
        document.querySelector('.alerta').style.display = "none";
    }, 5000);

    // Reseta o formulário
    document.getElementById('CodeHelp').reset();
}

// Função para salvar os dados no banco de dados
const saveDescription = (titulo, descricao, contato) =>{
    var newContratarForm = contratarDB.push(); // Cria uma nova entrada única no banco de dados

    // Define os dados a serem salvos
    newContratarForm.set({
        titulo : titulo,
        descricao : descricao,
        contato : contato, 
    });
};

// Função para obter o valor de um elemento pelo ID
const getElementVal = (id) => {
    return document.getElementById(id).value;
}
