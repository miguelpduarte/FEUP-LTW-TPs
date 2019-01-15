// a

document.querySelectorAll("#products > ul > li > a")
    .forEach((anchor) => {
        anchor.addEventListener("click", () => {
            anchor.previousElementSibling.textContent++;
        });
    });

// b

const products_list_items = document.querySelectorAll("#products > ul > li");
const list_item_text_regex = /(\w+):\s*(\d+)/;
const total_paragraph = document.querySelector("p.total");

document.querySelector("a.buy")
    .addEventListener("click", () => {
        let products_and_qts = [];
        products_list_items.forEach((list_item) => {
            const [_fullmatch, name, qty] = list_item.textContent.match(list_item_text_regex);

            products_and_qts.push({name, qty});
        });

        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            const response_number = parseInt(xhr.responseText);
            total_paragraph.textContent = (response_number < 0 ? "not enough stock": response_number);
        });
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.open("post", "calculatetotal.php", true);
        xhr.send(JSON.stringify(products_and_qts));
    });