// a
const password_input = document.querySelector("form#register > input[name=password]");

password_input.addEventListener("blur", () => {
    const curr_password = password_input.value;
    if (/[^\w]/.test(curr_password) && curr_password.length >= 8) {
        // Resetting the border to normal
        password_input.style.border = "";
    } else {
        password_input.style.border = "2px solid red";
    }
});

// b
const username_input = document.querySelector("form#register > input[name=username]");

document.querySelector("form#register > input[type=submit]")
    .addEventListener("click", (submit_evt) => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            // Debating between this and JSON.parse(xhr.responseText) -- no conclusion was reached
            const parsed_res = xhr.response;
            // Server replied saying the username is not valid
            if (!parsed_res.valid) {
                submit_evt.preventDefault();
                username_input.style.border = "2px solid red";
            } else {
                username_input.style.border = "";
            }
        });
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.open("post", "verifyusername.php", true);
        xhr.send(JSON.stringify({"username": username_input.value}));
    });