var options = document.getElementsByClassName("option"), animItems = document.getElementsByClassName("anim"), b1 = document.getElementById("b1"), b2 = document.getElementById("b2"), b3 = document.getElementById("b3"), slider = document.getElementById("slider"), li = document.getElementsByClassName("artMain"), bikes = document.getElementsByClassName("bikes");

document.getElementById("button").onclick = function() {
     this.classList.toggle("x");
	 document.getElementById("menu").classList.toggle("y");
}

options[0].onclick = function() {
     window.location = "index.html";
}

options[1].onclick = function() {
     window.location = "BIOGRAPHY.html";
}

options[2].onclick = function() {
     window.location = "ART.html";
}

window.addEventListener('scroll', animScroll);
function animScroll() {
     for(var i = 0; i <= animItems.length; i++) {
	     var item = animItems[i];
		 var itemHeight = item.offsetHeight;
		 var itemOffset = offset(item).top;
		 var start = 6;
		 var itemPoint = window.innerHeight - itemHeight / start;
		 if(itemHeight > window.innerHeight) {
		     itemPoint = window.innerHeight - window.innerHeight / start;
		 }
		 if(pageYOffset > (itemOffset - itemPoint) && pageYOffset < (itemOffset + itemHeight)) {
		     item.classList.add("active");
		 }
		 else {
		     if(!item.classList.contains("hide")) {
		         item.classList.remove("active");
			 }
		 }
	 }
}

function offset(e) {
     var rect = e.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	 return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

setTimeout(function() {
     animScroll();
}, 100);

for(var i = 0; i < bikes.length; i++) {
     bikes[i].onclick = function() {
		 for(var j = 0; j < bikes.length; j++) {
			 bikes[j].children[1].classList.remove("noneBlock");
		 }
	     this.children[1].classList.add("noneBlock");
	 }
}