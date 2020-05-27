function ajaxRequest(type,url,callback){
    let xhr = new XMLHttpRequest();
    xhr.open(type,url);

    xhr.onload = () => {
        switch(xhr.status){
            case 200:
            case 201: //console.log(xhr.responseText);
            callback(xhr.responseText);
                break; 
            default: callback(xhr.status);  
        }
    };

    xhr.send();
}

function print(date){
    document.getElementById('timestamp').innerHTML = '<span class="material-icons">watch_later</span> '+date;
    setTimeout(ajaxRequest('GET','php/timestamp.php',print),1000);
}

function print_error(error){
    let texte;
    switch(error){
        case 400:
            texte = '400: Requête incorrecte';
            break;
        case 401:
            texte = '401: Authentifiez vous';
            break;
        case 403:
            texte = '403: Accès refusé';
            break;
        case 404:
            texte = '404: Page non trouvée';
            break;  
        case 500:
            texte = '500: Erreur interne du serveur';
            break;  
        case 503:
            texte = '503: Service indisponible';
            break;
    }
    let div = document.getElementById('errors');
    div.innerHTML = '<span class="material-icons">error</span>' + texte;
    div.style.display = null;
}

//ajaxRequest('GET','php/timestamp.php',print);
ajaxRequest('GET','php/errors.php',print_error);
//ajaxRequest('GET','php/timestampp.php',print_error);