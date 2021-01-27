var mainset = document.getElementById("mainset");
		var lunch = document.getElementById("lunch");
		var naanset = document.getElementById("naanset");
		var sidemenu = document.getElementById("sidemenu");
		var btn2 = document.getElementById("btn2");
		var btn3 = document.getElementById("btn3");
		var btn4 = document.getElementById("btn4");


		function openMainset() {
			mainset.style.transform = "translateX(0)";
			lunch.style.transform = "translateX(100%)";
			sidemenu.style.transform = "translateX(100%)";
			btn2.style.color = "#ff0157";
			btn3.style.color = "#000";
			btn4.style.color = "#000";
			mainset.style.transitionDelay = "0.3s";
			lunch.style.transitionDelay = "0s";
			sidemenu.style.transitionDelay = "0s";
		}


		function openLunch() {
			mainset.style.transform = "translateX(100%)";
			lunch.style.transform = "translateX(0)";
			sidemenu.style.transform = "translateX(100%)";
			btn3.style.color = "#ff0157";
			btn2.style.color = "#000";
			btn4.style.color = "#000";
			mainset.style.transitionDelay = "0s";
			lunch.style.transitionDelay = "0.3s";
			sidemenu.style.transitionDelay = "0s";
		}

		function openSidemenu() {
			mainset.style.transform = "translateX(100%)";
			lunch.style.transform = "translateX(100%)";
			sidemenu.style.transform = "translateX(0)";
			btn4.style.color = "#ff0157";
			btn3.style.color = "#000";
			btn2.style.color = "#000";
			mainset.style.transitionDelay = "0s";
			lunch.style.transitionDelay = "0s";
			naanset.style.transitionDelay = "0s";
			sidemenu.style.transitionDelay = "0.3s";
		}