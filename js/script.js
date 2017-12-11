	(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }

})();

var marginY = 0;
var destination = 0;
var speed = 10;
var scroller = null;

function initScroll(elementId){
	destination = document.getElementById(elementId).offsetTop;
	
	scroller = setTimeout(function(){
		initScroll(elementId);
	}, 1);

	marginY = marginY + speed;

	if(marginY >= destination){
		clearTimeout(scroller);
	}	

	window.scroll(1, marginY);

	//console.log(destination);
}

function clickAlert() {
    alert("Thank you \n Your form has been submitted");
}


