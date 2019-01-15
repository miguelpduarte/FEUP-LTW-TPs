document.querySelector("botão").addEventListener("click", () => {
	document.querySelectorAll("ul li").forEach((item) => {item.classList.remove("used")});
	document.querySelector("input[type=text]").value = "";
});
