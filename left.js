(function() {
    var zhankai = document.getElementById('zhankai');
    var shouqi = document.getElementById('shouqi');
    var leftlan = document.getElementById('leftlan');
    zhankai.onclick = function() {
        leftlan.style.left = "0px";
        shouqi.style.left = "675px";
    }
    shouqi.onclick = function() {
        leftlan.style.left = "-700px";
        shouqi.style.left = "-25px";
    }
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var img5 = document.getElementById('img5');
    var img6 = document.getElementById('img6');
    var img1_6 = document.getElementById('img1_6');
    var imgxia = document.getElementById('imgxia');
    var img1_shouming = document.getElementById('img1_shuoming');
    var img2_shouming = document.getElementById('img2_shuoming');
    var img3_shouming = document.getElementById('img3_shuoming');
    var img4_shouming = document.getElementById('img4_shuoming');
    var img5_shouming = document.getElementById('img5_shuoming');
    var img6_shouming = document.getElementById('img6_shuoming');
    img1.onmouseover = function() {
        img1.src = "img/1-1.jpg";
        img1_6.src = "img/11.jpg";
        imgxia.src = "img/1-11.jpg";
        img1_shouming.className = "show";
        img2_shouming.className = "hid";
        img3_shouming.className = "hid";
        img4_shouming.className = "hid";
        img5_shouming.className = "hid";
        img6_shouming.className = "hid";
    }
    img1.onmouseout = function() {
        img1.src = "img/1.jpg";
    }
    img2.onmouseover = function() {
        img2.src = "img/2-2.jpg";
        img1_6.src = "img/22.jpg";
        imgxia.src = "img/2-22.jpg";
        img1_shouming.className = "hid";
        img2_shouming.className = "show";
        img3_shouming.className = "hid";
        img4_shouming.className = "hid";
        img5_shouming.className = "hid";
        img6_shouming.className = "hid";
    }
    img2.onmouseout = function() {
        img2.src = "img/2.jpg";
    }
    img3.onmouseover = function() {
        img3.src = "img/3-3.jpg";
        img1_6.src = "img/33.jpg";
        imgxia.src = "img/3-33.jpg";
        img1_shouming.className = "hid";
        img2_shouming.className = "hid";
        img3_shouming.className = "show";
        img4_shouming.className = "hid";
        img5_shouming.className = "hid";
        img6_shouming.className = "hid";
    }
    img3.onmouseout = function() {
        img3.src = "img/3.jpg";
    }
    img4.onmouseover = function() {
        img4.src = "img/4-4.jpg";
        img1_6.src = "img/44.jpg";
        imgxia.src = "img/4-44.jpg";
        img1_shouming.className = "hid";
        img2_shouming.className = "hid";
        img3_shouming.className = "hid";
        img4_shouming.className = "show";
        img5_shouming.className = "hid";
        img6_shouming.className = "hid";
    }
    img4.onmouseout = function() {
        img4.src = "img/4.jpg";
    }
    img5.onmouseover = function() {
        img5.src = "img/5-5.jpg";
        img1_6.src = "img/55.jpg";
        imgxia.src = "img/5-55.jpg";
        img1_shouming.className = "hid";
        img2_shouming.className = "hid";
        img3_shouming.className = "hid";
        img4_shouming.className = "hid";
        img5_shouming.className = "show";
        img6_shouming.className = "hid";
    }
    img5.onmouseout = function() {
        img5.src = "img/5.jpg";
    }
    img6.onmouseover = function() {
        img6.src = "img/6-6.jpg";
        img1_6.src = "img/66.jpg";
        imgxia.src = "img/6-66.jpg";
        img1_shouming.className = "hid";
        img2_shouming.className = "hid";
        img3_shouming.className = "hid";
        img4_shouming.className = "hid";
        img5_shouming.className = "hid";
        img6_shouming.className = "show";
    }
    img6.onmouseout = function() {
        img6.src = "img/6.jpg";
    }
}(window))
