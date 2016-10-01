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
}(window))
