(function () {
	var zhankai = document.getElementById('zhankai');
    var shouqi = document.getElementById('shouqi');
	var leftlan = document.getElementById('leftlan');
	zhankai.onclick = function () {
		leftlan.style.left = "0px";
		shouqi.style.left = "675px";
	}
	shouqi.onclick = function () {
		leftlan.style.left = "-700px";
		shouqi.style.left = "-25px";
	}
}(window))