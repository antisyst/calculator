import './style.scss';

document.querySelector('#app').innerHTML = `
<div class='main-extended'>
<div class="container">
<header>
  <nav>
  </nav>
</header>

<section class="toggleBtn">
  <div class="modeBtn">
    <span class="material-symbols-outlined modeIcon" id="light">
      light_mode
    </span>
    <span class="material-symbols-outlined modeIcon active" id="dark">
      dark_mode
    </span>
  </div>
</section>
<br/>
<form action="" class="form">
  <section class="display">
    <input type="text" readonly name="display" />
  </section>

  <section class="buttons" id="buttonsWrapper">
    <input type="button" value="AC" class="topBtns" />
    <input type="button" value="DEL" class="topBtns" />
    <input type="button" value="&percnt;" class="topBtns" />
    <input type="button" value="&divide;" class="operators" />
    <input type="button" value="7" />
    <input type="button" value="8" />
    <input type="button" value="9" />
    <input type="button" value="&times;" class="operators" />
    <input type="button" value="4" />
    <input type="button" value="5" />
    <input type="button" value="6" />
    <input type="button" value="&minus;" class="operators" />
    <input type="button" value="3" />
    <input type="button" value="2" />
    <input type="button" value="1" />
    <input type="button" value="&plus;" class="operators" />
    <input type="button" value="0" />
    <input type="button" value="00" />
    <input type="button" value="." />
    <input type="button" value="=" class="operators" />
  </section>
</form>
</div>
 <h3 class='creator-content'>Developed by <a href='https://rmzn.netlify.app' target='_blank'>Ramazan Azimli</a></h3>
</div>
`

const display = document.querySelector(".display input");
const buttons = document.querySelectorAll(".buttons input");


// Select Element to change the theme
const container = document.querySelector(".container");
const buttonsWrapper = document.querySelector("#buttonsWrapper");
const darkMode = document.querySelector("#dark");
const lightMode = document.querySelector("#light");
const navItem = document.querySelector("nav");
const timeText = document.querySelector(".time h1");
const modeBtn = document.querySelector(".modeBtn");
const modeIcon = document.querySelectorAll(".modeIcon");

// Calculator functionality
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		switch (button.value) {
			case "=":
				display.value = display.value.replace(/÷/g, "/");
				display.value = display.value.replace(/×/g, "*");
				display.value = display.value.replace(/−/g, "-");
				display.value = eval(display.value);
				break;
			case "AC":
				display.value = "";
				break;
			case "DEL":
				display.value = display.value.slice(0, -1);
				break;
			default:
				display.value += button.value;
		}
	});
});



// Event listener to change the theme
darkMode.addEventListener("click", () => {
	darkMode.classList.add("active");
	lightMode.classList.remove("active");
	buttons.forEach((button) => {
		button.classList.remove("light");
	});
	buttonsWrapper.classList.remove("light");
	container.classList.remove("light");
	navItem.classList.remove("light");
	timeText.classList.remove("light");
	modeBtn.classList.remove("light");
	modeIcon.forEach((icon) => {
		icon.classList.remove("light");
	});
	display.classList.remove("light");
});
lightMode.addEventListener("click", () => {
	lightMode.classList.add("active");
	darkMode.classList.remove("active");
	buttons.forEach((button) => {
		button.classList.add("light");
	});
	container.classList.add("light");
	buttonsWrapper.classList.add("light");
	navItem.classList.add("light");
	timeText.classList.add("light");
	modeBtn.classList.add("light");
	modeIcon.forEach((icon) => {
		icon.classList.add("light");
	});
	display.classList.add("light");
});


