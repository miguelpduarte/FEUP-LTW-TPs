// a

const guess_input = document.querySelector("input[name=guess]");

document.querySelector("#guess")
    .addEventListener("click", () => {
        if (guess_input.value < secret) {
            alert("go up");
            tries++;
        } else if (guess_input.value > secret) {
            alert("go down");
            tries++;
        } else {
            correct();
        }
    });

// b

const username_input = document.querySelector("input[name=username]");

const correct = () => {
    alert("correct");

    const xhr = new XMLHttpRequest();
    // Checking the load event for success and the error event for non-success
    // An idea also occurred related to checking the response status but I believe
    //this to be more correct due to the statement mentioning "the script" and
    //not "the request" or "the server response"
    xhr.addEventListener("load", () => {
        alert("script successful");
    });
    xhr.addEventListener("error", () => {
        alert("script unsuccessful");
    });
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open("post", "save_score.php", true);
    xhr.send(JSON.stringify({
        username: username_input.value,
        tries,
    }));
};