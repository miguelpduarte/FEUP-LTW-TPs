const list_items = document.querySelectorAll("section#game > ul > li");
const guess_input = document.querySelector("section#game > input[name=guess]");

document.querySelector("section#game > input[name=reset]")
	.addEventListener("click", () => {
		list_items.forEach((item) => {item.classList.remove("used")});

		guess_input.value = "";
	});
