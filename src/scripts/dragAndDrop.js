

function addDnDHandlers() {

    const coffeeimages = document.getElementsByClassName("productarticlewide");
    const shoppingCartDropzone = document.getElementById("shoppingcart");

    let shoppingcart = document.querySelectorAll("#shoppingcart ul")[0];

    for (let i = 0; i < coffeeimages.length; i++) {
        coffeeimages[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }

    shoppingCartDropzone.addEventListener("dragover", function (ev) {
        if (ev.preventDefault)
            ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
        return false;
    }, false);

    shoppingCartDropzone.addEventListener("drop", function (ev) {
        if (ev.stopPropagation)
            ev.stopPropagation();

        let coffeeId = ev.dataTransfer.getData("Text");
        let element = document.getElementById(coffeeId);

        addCoffeeToShoppingCart(element, coffeeId);
        ev.stopPropagation();

        return false; 
    }, false);

    function addCoffeeToShoppingCart(item, id) {
        let html = id + " " + item.getAttribute("data-price");

        let liElement = document.createElement('li');
        liElement.innerHTML = html;
        shoppingcart.appendChild(liElement);
    }
}