function verifica(){
    if (document.getElementById("username").value=="") {
        alert("inserisci nome utente");
        return false;
    } else {
        if (document.getElementById("password").value=="") {
            alert("inserisci la password");
            return false;
        } else {
            return true;
        }
    }

}
function verifica1(){
    if (document.getElementById("username1").value=="") {
        alert("nome utente obbligatorio");
        return false;
    } else {
        if (document.getElementById("password1").value=="") {
            alert("password obbligatoria");
            return false;
        } else {
           if (document.getElementById("telefono").value=="") {
            alert("numero di telefono obbligatorio");
               return false;
           } else {
               if (document.getElementById("email").value=="") {
                alert("email obbligatoria");
                return false;
               } else {
                   return true;
               }
           }
        }
    }
}