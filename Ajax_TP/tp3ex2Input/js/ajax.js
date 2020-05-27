function ajaxRequest(type,url,callback){
    let xhr = new XMLHttpRequest();
    xhr.open(type,url);

    xhr.onload = () =>{
        var json = xhr.responseText;
        var data = JSON.parse(json);
       // console.log(json);
       // console.log(data);
        callback(data);
    };

    xhr.send();
}

function print(data){
    document.getElementById('title').innerHTML = data[0];
    document.getElementById('detail').innerHTML = data[1]["hours"];

}
ajaxRequest('GET','php/time.php',print);