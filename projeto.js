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

  //initialize firebase
  firebase.initializeApp(firebaseConfig);


// reference CodeHelp é o nome que ele irá registrar dentro do bd
var contratarDB = firebase.database().ref('CodeHelp')

document.getElementById('CodeHelp').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var titulo = getElementVal('titulo'); 
    var descricao = getElementVal('descricao');
    var contato = getElementVal('contato');

        saveDescription(titulo, descricao, contato);

        //enable alert
        document.querySelector('.alerta').style.display = "block";
        

    // console.log(titulo, descricao, contato)

    //remove alerta
    setTimeout(() => {
        document.querySelector('.alerta').style.display = "none";
    }, 5000);
    
//resetar o form
    document.getElementById('CodeHelp').reset();

}

const saveDescription = (titulo, descricao, contato) =>{
    var newContratarForm = contratarDB.push();

    newContratarForm.set({
        titulo : titulo,
        descricao : descricao,
        contato : contato, 
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
