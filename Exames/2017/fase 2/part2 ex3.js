// a

const large_photo = document.querySelector("#photos > img.large");

document.querySelectorAll("#photos > ul > li > img")
    .forEach((photo) => {
        photo.addEventListener("click", () => {
            large_photo.setAttribute("src", `large/${photo.getAttribute("src")}`);
        });
    });

// b

document.querySelector("a.load")
    .addEventListener("click", () => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            const new_srcs = JSON.parse(xhr.response);
            new_srcs.forEach((new_src) => append_image_to_list(new_src));
        });
        xhr.open("get", "getrandomimages.php", true);
        xhr.send();
    });

const image_list_root = document.querySelector("#photos > ul");

const append_image_to_list = (src) => {
    // Creating the new image with the given src
    const new_img = document.createElement("img");
    new_img.setAttribute("src", src);
    // Creating enclosing list item
    const new_li = document.createElement("li");
    new_li.appendChild(new_img);
    // Appending to the existing image list
    image_list_root.appendChild(new_li);
};