function vinculo(){
    let nombre = document.getElementById("usuario").value;
    let contraseña = document.getElementById("password").value;
    
    if(nombre == 0 || contraseña == 0){
        alert("Los campos son obligatorios");
        return false;
    }
    if (nombre == "usuario1@gmail.com" && contraseña == "1234567890"){
        window.open("app-home")
    }
    
    else{
        alert("verifique sus datos");
    }
    
}
