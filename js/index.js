window.onload = function  () {
	var word = document.getElementsByClassName('word')[0];
word.onfocus = function() {
	word.style.borderColor = "#38f";
}
word.onblur = function() {
	word.style.borderColor = "";
}

window.onscroll = function() {
	var topScroll = document.body.scrollTop; //滚动的距离,距离顶部的距离
	var menu = document.getElementsByClassName("menu")[0]; //获取到导航栏id
	var nav = document.getElementsByClassName('nav')[0];
	if(topScroll > 136) { //当滚动距离大于250px时执行下面的东西
		menu.style.position = 'fixed';
		menu.style.top = '0';
		menu.style.zIndex = '9999';
		nav.stu
	} else { //当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
		menu.style.position = 'static';
	}
}

window.onload = function() {
	var li1 = document.getElementsByClassName('li1')[0];
	var li2 = document.getElementsByClassName('li2')[0];
	var tab1 = document.getElementById('tab1');
	var tab2 = document.getElementById('tab2');
	var one = document.getElementById('one');
	var two = document.getElementById('two');
	tab1.onclick = function() {
		one.style.display = 'block';
		two.style.display = 'none';
		li1.className = 'active';
		li2.className = '';
	}
	tab2.onclick = function() {
		one.style.display = 'none';
		two.style.display = 'block';
		li2.className = 'active';
		li1.className = '';
	}
}

var circle = document.getElementById("mynav").getElementsByTagName('span');
var imgview = document.getElementsByClassName('imgpic');
var prev = document.getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('next')[0];
var container = document.getElementsByClassName('imgplayer')[0];
var imgtit = document.getElementsByClassName('imgtxt')[0].getElementsByTagName('a');
var timer;
for(var i = 0; i < imgview.length; i++) {
	circle[i].index = i;
	circle[i].onmouseover = function() {
		for(var j = 0; j < imgview.length; j++) {
			imgview[j].src = 'img/p' + (this.index) + '.jpg';
			circle[j].className = '';
			imgtit[j].style.display = 'none'
		}
		circle[this.index].className = 'current';
		imgtit[this.index].style.display = 'block'
	}
}
var index = 0;

function circleShow() {
	//将之前的小圆点的样式清除
	for(var i = 0; i < circle.length; i++) {
		for(var j = 0; j < imgview.length; j++) {
			imgview[j].src = 'img/p' + this.index + '.jpg';
			imgtit[j].style.display = 'none'
		}
		if(circle[i].className == "current") {
			circle[i].className = "";
		}
	}
	//数组从0开始，故index需要-1
	circle[index].className = "current";
	imgtit[index].style.display = 'block'
}

function play() {
	//重复执行的定时器
	timer = setInterval(function() {
		next.onclick();
	}, 3000)
}

function stop() {
	clearInterval(timer);
}
prev.onclick = function() {
	index -= 1;
	if(index < 0) {
		index = 5
	}
	circleShow();
};
next.onclick = function() {
	index += 1;
	if(index > 5) {
		index = 0
	}
	circleShow();
};
container.onmouseover = stop;
container.onmouseout = play;
play();

var spans = document.getElementsByClassName('listnum');
for(var i = 0; i < spans.length; i++) {
	spans[i].style.backgroundPosition = 0 + 'px ' + -i * 18 + 'px';
}

var city = document.getElementsByClassName('city')[0];
var close = document.getElementById("btn_close ");
var view = document.getElementById('city_view');

city.onclick = function() {
	if(view.style.visibility == 'visible') {
		view.style.visibility = 'hidden';
	} else {
		view.style.visibility = 'visible';
	}
}
close.onclick = function() {
	view.style.visibility = 'hidden';
}

var spans1 = document.getElementById("num1 ").getElementsByClassName('listnum');
for(var i = 0; i < spans1.length; i++) {
	spans1[i].style.backgroundPosition = 0 + 'px ' + -i * 18 + 'px';
}

var spans2 = document.getElementById("num2 ").getElementsByClassName('listnum');
for(var i = 0; i < spans2.length; i++) {
	spans2[i].style.backgroundPosition = 0 + 'px ' + -i * 18 + 'px';
}

var gotops = document.getElementById("gotop").getElementsByTagName('li');
for(var i = 0; i < gotops.length; i++) {
	gotops[i].style.backgroundPosition = 0 + 'px ' + -i * 50 + 'px';
}
}