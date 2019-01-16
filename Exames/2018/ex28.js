// const guess_input = document.querySelector("section#game > input[name=guess]");
const my_list = document.querySelector("section#game > ul");

document.querySelector("section#game > input[name=send]")
	.addEventListener("click", (e) => {
        // Because we are doing the request in Ajax
        e.preventDefault();
        
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            // .response vs JSON.parse(xhr.responseText) -> who knows
            const res = JSON.parse(xhr.responseText);
            
            // Getting the result and word values from the response object (object destructuring)
            const {result, word} = res;

            if (result === "wrong") {
                alert("WRONG");
            } else if (result === "correct") {
                // Clearing input
                guess_input.value = "";
                // Removing list items
                removeChildren(my_list);

                // Creating the new lists
                word.forEach((letter) => {
                    const new_li = document.createElement("li");
                    new_li.textContent = letter;

                    // Adding the click event listener as before
                    new_li.addEventListener("click", handler);
                    
                    my_list.appendChild(new_li);
                });
            }
        });

        xhr.open("post", "http://localhost:8001/is_guess_correct.php", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.open("post", "is_guess_correct.php", true);
        xhr.send(JSON.stringify({guess: guess_input.value}));
	});

const removeChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};