const input = document.querySelector("section#game > input[name=guess]");
document.querySelectorAll("section#game > ul > li")
	.forEach((item) => {
		item.addEventListener("click", handler)
	});

function handler() {
	if (this.classList.contains("used")) {
		return;	
	}
	
	this.classList.add("used");
	const letter = this.textContent;

	input.value += letter;
}