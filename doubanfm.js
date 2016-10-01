(function() {
    var sanjiaochoose = document.getElementById('sanjiaochoose');
    var xiala = document.getElementById('xiala');
    var xialakuang = document.getElementById('xialakuang');
    xialakuang.classList.add("hid");
    sanjiaochoose.onmouseover = function() {
        xialakuang.className = "show";
    }
    sanjiaochoose.onmouseout = function() {
        xialakuang.className = "hid"
    }

    var audio = document.getElementById('audio');
    var jindu = document.getElementById('jindu');
    var jindutiao = document.getElementById('jindutiao');
    var jixu = document.getElementById('jixu');    
    jindutiao.onmousedown = function(event) {
        var length = event.clientX - jindu.offsetLeft;
        var percent = (length-870) / jindutiao.offsetWidth;
        jindu.style.width = percent * 210  + "px";
        audio.currentTime = percent * audio.duration;
    }
    jindu.onmousedown = function(event) {
        var length = event.clientX - jindu.offsetLeft;
        var percent = (length-870) / jindutiao.offsetWidth;
        jindu.style.width = percent * 210 +"px";
        audio.currentTime = percent * audio.duration;
    }
    var play = document.getElementById('play');
    var musicyinying = document.getElementById('musicyinying');
    var jixu = document.getElementById('jixu');
    play.onclick = function () {
    	if (audio.played) {
            audio.pause();singerphoto
    	} 
    	musicyinying.style.display="block";    	
    }
    jixu.onclick = function () {
    	if (audio.paused) {
            audio.play();
    	}
    	musicyinying.style.display="none";   	
    }
    var photoyinying = document.getElementById('photoyinying');
    var chakan = document.getElementById('musicyinying');
    var singerphoto = document.getElementById('singerphoto');
    singerphoto.onmouseover = function () { 
    	photoyinying.style.display="block";    	
    }
    photoyinying.onmouseout = function () {
    	photoyinying.style.display="none";   	
    }
}(window))
