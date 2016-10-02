"use strict";
(function() {
    var sanjiaochoose = document.getElementById('sanjiaochoose');
    var xiala = document.getElementById('xiala');
    var xialakuang = document.getElementById('xialakuang');
    xialakuang.classList.add("hid");
    sanjiaochoose.onmouseover = function() {
        xialakuang.className = "show";
    }
    sanjiaochoose.onmouseout = function() {
        xialakuang.className = "hid";
    }

    var audio = document.getElementById('audio');
    var jindu = document.getElementById('jindu');
    var jindutiao = document.getElementById('jindutiao');
    var jixu = document.getElementById('jixu'); 
    audio.ontimeupdate = function() {
    var baifenbi = audio.currentTime / audio.duration;
    jindu.style.width = baifenbi * 210 + "px";
    } 
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
            audio.pause();
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
    var xihuan = document.getElementById('xihuan');
    var heixin = document.getElementById('heixin');
    var huixin = document.getElementById('huixin');
    var redxin = document.getElementById('redxin');
    var cancel = document.getElementById('cancel');
    heixin.onmouseover = function () {
    	xihuan.style.display = "block";
    	huixin.style.display = "block";
    	heixin.style.display = "none";
    }
    huixin.onmouseout = function () {
    	xihuan.style.display = "none";
    	huixin.style.display = "none";
    	heixin.style.display = "block";
    }
    huixin.onclick = function () {
    	xihuan.style.display = "block";
    	huixin.style.display = "none";
    	redxin.style.display = "block";
    	cancel.style.display = "none";
    }
     redxin.onmouseover = function () {
    	xihuan.style.display = "block";
    }
    redxin.onmouseout = function () {
    	cancel.style.display = "none";
    }
    
    redxin.onclick = function () {
    	heixin.style.display = "block";
    	redxin.style.display = "none";
    	cancel.style.display = "none";
    }
    var buzai = document.getElementById('buzai');
    var shanchu = document.getElementById('shanchu');
    shanchu.onmouseover = function () {
    	buzai.style.display = "block";
    }
    shanchu.onmouseout = function () {
    	buzai.style.display = "none";
    }
    var xiayishou = document.getElementById('xiayishou');
    var next = document.getElementById('next');
    next.onmouseover = function () {
    	xiayishou.style.display = "block";
    }
    next.onmouseout = function () {
    	xiayishou.style.display = "none";
    }
}(window))
