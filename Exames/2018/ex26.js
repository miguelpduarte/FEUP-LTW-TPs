const input = document.querySelector("input[type='text']");
document.querySelectorAll("ul li").forEach((item) => {item.addEventListener("click", handler)});

function handler() {
	if (this.classList.contains("used")) {
		return;	
	}
	
	this.classList.add("used");
	const letter = this.text;


	input.value += letter;
}
