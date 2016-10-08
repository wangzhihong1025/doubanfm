"use strict";
(function() {
    var xiala = document.getElementById('xiala');
    var xialakuang = document.getElementById('xialakuang');
    xiala.onmouseover = function() {
        xialakuang.style.display = "block";
    }
    xiala.onmouseout = function() {
        xialakuang.style.display = "none";
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
        var percent = (length - 870) / jindutiao.offsetWidth;
        jindu.style.width = percent * 210 + "px";
        audio.currentTime = percent * audio.duration;
    }
    jindu.onmousedown = function(event) {
        var length = event.clientX - jindu.offsetLeft;
        var percent = (length - 870) / jindutiao.offsetWidth;
        jindu.style.width = percent * 210 + "px";
        audio.currentTime = percent * audio.duration;
    }
    var volume = document.getElementById('volume');
    var volumemove = document.getElementById('volumemove');
    volume.onmousedown = function(event) {
        var length = event.clientX - volume.offsetLeft;
        var percent = (length - 870) / volume.offsetWidth;
        volumemove.style.width = percent * 70 + "px";
        audio.volume = percent;
    }
    volumemove.onmousedown = function(event) {
        var length = event.clientX - volume.offsetLeft;
        var percent = (length - 870) / volume.offsetWidth;
        volumemove.style.width = percent * 70 + "px";
        audio.volume = percent;
    }
    var play = document.getElementById('play');
    var musicyinying = document.getElementById('musicyinying');
    var jixu = document.getElementById('jixu');
    play.onclick = function() {
        if (audio.played) {
            audio.pause();
        }
        musicyinying.style.display = "block";
    }
    jixu.onclick = function() {
        if (audio.paused) {
            audio.play();
        }
        musicyinying.style.display = "none";
    }
    var photoyinying = document.getElementById('photoyinying');
    var chakan = document.getElementById('musicyinying');
    var singerphoto = document.getElementById('singerphoto');
    singerphoto.onmouseover = function() {
        photoyinying.style.display = "block";
    }
    photoyinying.onmouseout = function() {
        photoyinying.style.display = "none";
    }
    var xihuan = document.getElementById('xihuan');
    var heixin = document.getElementById('heixin');
    var huixin = document.getElementById('huixin');
    var redxin = document.getElementById('redxin');
    var cancel = document.getElementById('cancel');
    heixin.onmouseover = function() {
        xihuan.style.display = "block";
        huixin.style.display = "block";
        heixin.style.display = "none";
    }
    huixin.onmouseout = function() {
        xihuan.style.display = "none";
        huixin.style.display = "none";
        heixin.style.display = "block";
    }
    huixin.onclick = function() {
        xihuan.style.display = "block";
        huixin.style.display = "none";
        redxin.style.display = "block";
        cancel.style.display = "none";
    }
    redxin.onmouseover = function() {
        xihuan.style.display = "block";
    }
    redxin.onmouseout = function() {
        cancel.style.display = "none";
    }

    redxin.onclick = function() {
        heixin.style.display = "block";
        redxin.style.display = "none";
        cancel.style.display = "none";
    }
    var buzai = document.getElementById('buzai');
    var shanchu = document.getElementById('shanchu');
    shanchu.onmouseover = function() {
        buzai.style.display = "block";
    }
    shanchu.onmouseout = function() {
        buzai.style.display = "none";
    }
    var xiayishou = document.getElementById('xiayishou');
    var next = document.getElementById('next');
    next.onmouseover = function() {
        xiayishou.style.display = "block";
    }
    next.onmouseout = function() {
        xiayishou.style.display = "none";
    }
    var same = document.getElementById('same');
    same.onmouseover = function() {
        same.src = "img/same2.jpg";
    }
    same.onmouseout = function() {
        same.src = "img/same.jpg";
    }
    var zhankaifenxiang = document.getElementById('zhankaifenxiang');
    var fenxiang = document.getElementById('fenxiang');
    var tubiao = document.getElementById('tubiao');
    zhankaifenxiang.onmouseover = function() {
        tubiao.style.display = "block";
    }
    zhankaifenxiang.onmouseout = function() {
        tubiao.style.display = "none";
    }
    var dou = document.getElementById('dou');
    var xinlang = document.getElementById('xinlang');
    var weixin = document.getElementById('weixin');
    var qq = document.getElementById('qq');
    var tengxun = document.getElementById('tengxun');
    var renren = document.getElementById('renren');
    dou.onmouseover = function() {
        dou.src = "img/dou2.jpg";
    }
    dou.onmouseout = function() {
        dou.src = "img/dou.jpg";
    }
    xinlang.onmouseover = function() {
        xinlang.src = "img/xinlang2.jpg";
    }
    xinlang.onmouseout = function() {
        xinlang.src = "img/xinlang.jpg";
    }
    weixin.onmouseover = function() {
        weixin.src = "img/weixin2.jpg";
    }
    weixin.onmouseout = function() {
        weixin.src = "img/weixin.jpg";
    }
    qq.onmouseover = function() {
        qq.src = "img/qq2.jpg";
    }
    qq.onmouseout = function() {
        qq.src = "img/qq.jpg";
    }
    tengxun.onmouseover = function() {
        tengxun.src = "img/tengxun2.jpg";
    }
    tengxun.onmouseout = function() {
        tengxun.src = "img/tengxun.jpg";
    }
    renren.onmouseover = function() {
        renren.src = "img/renren2.jpg";
    }
    renren.onmouseout = function() {
        renren.src = "img/renren.jpg";
    }
    var img40 = document.getElementById('img40');
    img40.onmouseover = function() {
        img40.src = "img/4.01.jpg";
    }
    img40.onmouseout = function() {
        img40.src = "img/4.0.jpg";
    }
}(window))
