function login(){
    var user , password
    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if( user == "Luisg059" && password == "12345"){
        alert("Inicio exitoso")
    } else{
        alert("Datos incorrectos")
    }
    }