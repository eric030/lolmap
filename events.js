document.getElementById("top").onmouseover = ilumina;
document.getElementById("top").onmouseout = apaga;

document.getElementById("nashor").onmouseover = ilumina;
document.getElementById("nashor").onmouseout = apaga;

document.getElementById("mid").onmouseover = ilumina;
document.getElementById("mid").onmouseout = apaga;

document.getElementById("nexo").onmouseover = ilumina;
document.getElementById("nexo").onmouseout = apaga;

document.getElementById("bot").onmouseover = ilumina;
document.getElementById("bot").onmouseout = apaga;

document.getElementById("red").onmouseover = ilumina;
document.getElementById("red").onmouseout = apaga;

document.getElementById("blue").onmouseover = ilumina;
document.getElementById("blue").onmouseout = apaga;

document.getElementById("dragon").onmouseover = ilumina;
document.getElementById("dragon").onmouseout = apaga;


document.getElementById("nashor").onclick = reproduir;
document.getElementById("top").onclick = reproduir1;
document.getElementById("mid").onclick = reproduir2;
document.getElementById("bot").onclick = reproduir3;
document.getElementById("red").onclick = reproduir4;
document.getElementById("blue").onclick = reproduir5;
document.getElementById("dragon").onclick = reproduir6;
document.getElementById("nexo").onclick = reproduir7;

document.getElementById("botoclose").onclick = reproductor;


function ilumina(){
    this.style.backgroundColor = '#F00';
}

function apaga(){
    this.style.backgroundColor = '#000';
}


 
/*Per quan apretis el boto de video Nashor, s'obri el reproductor amb un poster inicial, i es pari la musica que sonava de fons a la pantalla del mapa*/
function reproduir(){
    document.getElementById("visor").src = "videoNashor.mp4";
    document.getElementById("visor").poster = "nashor.png";
    document.getElementById("reproductor").style.visibility = 'visible';
    document.getElementById("musica").pause();
}


/*Per quan apretis el boto de video Top, s'obri el reproductor amb un poster inicial, i es pari la musica que sonava de fons a la pantalla del mapa*/
function reproduir1(){
    document.getElementById("visor").src = "videoTop.mp4";
    document.getElementById("visor").poster = "top.png";
    document.getElementById("reproductor").style.visibility = 'visible';
    document.getElementById("musica").pause();
}

/*Per quan apretis el boto de video Mid, s'obri el reproductor amb un poster inicial, i es pari la musica que sonava de fons a la pantalla del mapa*/
function reproduir2(){
    document.getElementById("visor").src = "videoMid.mp4";
    document.getElementById("visor").poster = "mid.png";
    document.getElementById("reproductor").style.visibility = 'visible';
    document.getElementById("musica").pause();
}

/*Per quan apretis el boto de video Bot, s'obri el reproductor amb un poster inicial, i es pari la musica que sonava de fons a la pantalla del mapa*/
function reproduir3(){
    document.getElementById("visor").src = "videoBot.mp4";
    document.getElementById("visor").poster = "bot.png";
    document.getElementById("reproductor").style.visibility = 'visible';
    document.getElementById("musica").pause();
}


/*Per quan apretis el boto de video Red, s'obri el reproductor amb un poster inicial, i es pari la musica que sonava de fons a la pantalla del mapa*/
function reproduir4(){
    document.getElementById("visor").src = "videoRed.mp4";
    document.getElementById("visor").poster = "red.png";
    document.getElementById("reproductor").style.visibility = 'visible';
    document.getElementById("musica").pause();
}


/*Per quan apretis el boto de video Blue, s'obri el reproductor amb un poster inicial, i es pari la musica que sonava de fons a la pantalla del mapa*/
function reproduir5(){
    document.getElementById("visor").src = "videoBlue.mp4";
    document.getElementById("visor").poster = "blue.png";
    document.getElementById("reproductor").style.visibility = 'visible';
    document.getElementById("musica").pause();
}


/*Per quan apretis el boto de video Dragon, s'obri el reproductor amb un poster inicial, i es pari la musica que sonava de fons a la pantalla del mapa*/
function reproduir6(){
    document.getElementById("visor").src = "videoDragon.mp4";
    document.getElementById("visor").poster = "dragon.png";
    document.getElementById("reproductor").style.visibility = 'visible';
    document.getElementById("musica").pause();
}


/*Per quan apretis el boto de video Nexo, s'obri el reproductor amb un poster inicial, i es pari la musica que sonava de fons a la pantalla del mapa*/
function reproduir7(){
    document.getElementById("visor").src = "videoNexo.mp4";
    document.getElementById("visor").poster = "victory.png";
    document.getElementById("reproductor").style.visibility = 'visible';
    document.getElementById("musica").pause();
}





window.onload = function(){
    
    var breproduir = document.getElementById("botoplay");
    var bpausar = document.getElementById("botopause");
    var bmes = document.getElementById("botomes");
    var bmenys = document.getElementById("botomenys");
    

/*Per pausar la musica i reproduir els videos*/    
    breproduir.onclick = function(){
        document.getElementById("visor").play();
        document.getElementById("musica").pause();
    }

    
/*Per pausar els videos */    
    bpausar.onclick = function() {
        document.getElementById("visor").pause();
    }


/*Per pujar el bolum dels videos*/    
    bmes.onclick = function() {
        document.getElementById("visor").volume = document.getElementById("visor").volume + 0.2
    }


/*Per vaixae el bolum dels videos */    
    bmenys.onclick = function() {
        document.getElementById("visor").volume = document.getElementById("visor").volume - 0.2
    }

    }


/*Per pausar els videos tornar a la pantalla del mapa i tornar a fer que soni la musica*/
function reproductor(){
        document.getElementById("reproductor").style.visibility = 'hidden';
        document.getElementById("musica").play();
        document.getElementById("visor").pause();
    }































