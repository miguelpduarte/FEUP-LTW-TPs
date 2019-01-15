// a

const pin_input = document.querySelector("form#pin > input[name=pin]");

document.querySelectorAll("#keypad > a")
    .forEach((anchor) => {
        anchor.addEventListener("click", () => {
            pin_input.value += anchor.textContent;
        });
    });

// b (not yet verified but should work)

const username_input = document.querySelector("form#pin > input[name=username]");

document.querySelector("form#pin > input[type=submit]")
    .addEventListener("click", () => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            // Debating between this and JSON.parse(xhr.responseText) -- no conclusion was reached
            const parsed_res = xhr.response;
            // Server replied saying the pin is not valid
            if (!parsed_res.valid) {
                pin_input.style.border = "2px solid red";
                pin_input.value = "";
            } else {
                pin_input.style.border = "";
            }
        });
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.open("post", "verify_pin.php", true);
        xhr.send(JSON.stringify({
            username: username_input.value,
            pin: pin_input.value,
        }));
    });