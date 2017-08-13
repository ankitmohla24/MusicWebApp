// Put your Last.fm API key here
var api_key = "********************************";

function sendRequest () {
    var xhr = new XMLHttpRequest();
    var method = "artist.getinfo";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            document.getElementById("artist").innerHTML = 
"<h2><u>ARTIST</u></h2>"+
"<b>Name: "+json.artist.name+"</b></br>"+
"<b>Url:</b> <a href=\""+json.artist.url+"\">"+json.artist.url+"</a></br>"+
"<img src=\""+json.artist.image[2]['#text']+"\"></br>"+
"<b>Stats:-</b></br>"+
"<b>Listeners:</b> "+json.artist.stats.listeners+"</br>"+
"<b>Playcount:</b> "+json.artist.stats.playcount+"</br>"+
"<b>Biography:</b></br> "+json.artist.bio.content+"</br>"
;
        }
    };
    xhr.send(null);
sendRequestTA.call();
sendRequestSA.call();
}



function sendRequestTA () {
    var xhr = new XMLHttpRequest();
    var method = "artist.getTopAlbums";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            //var str = JSON.stringify(json,undefined,2);
            var list='';
for(var i=0;i<json.topalbums.album.length;i++)

list+= '<b>Name: '+ json.topalbums.album[i].name+'</b><br>' 
+'<b>Playcount:</b> '+ json.topalbums.album[i].playcount+'<br>' +
'<b>Url:</b> <a href="'+json.topalbums.album[i].url+'">'+json.topalbums.album[i].url+'</a></br>'+
'<img src="'+json.topalbums.album[i].image[2]['#text']+'"><p>';


document.getElementById("album").innerHTML =
"<h2><u>TOP ALBUMS</u></h2>"+list;

        }
    };
    xhr.send(null);
}


function sendRequestSA () {
    var xhr = new XMLHttpRequest();
    var method = "artist.getSimilar";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            //var str = JSON.stringify(json,undefined,2);
            var simlist='';
for(var i=0;i<json.similarartists.artist.length;i++)

simlist+= '<b>Name: '+json.similarartists.artist[i].name+'</b></br>'+
'<b>Url:</b> <a href="'+json.similarartists.artist[i].url+'">'+json.similarartists.artist[i].url+'</a></br>'+
'<img src="'+json.similarartists.artist[i].image[2]['#text']+'"></br><p>';


document.getElementById("similar").innerHTML =
"<h2><u>SIMILAR ARTISTS</u></h2>"+simlist;

        }
    };
    xhr.send(null);
}


