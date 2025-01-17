let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let list = document.querySelector('.container .list');
let thumb = document.querySelector('.container .thumb');

// Evento para mover os itens com as setas
btnNext.onclick = () => moveItems('next');
btnBack.onclick = () => moveItems('back');

function moveItems(direction) {
    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

    if (direction === 'next') {
        list.appendChild(listItems[0]); // Move o primeiro item para o final
        thumb.appendChild(thumbItems[0]); // Move a primeira miniatura para o final
    } else {
        list.prepend(listItems[listItems.length - 1]); // Move o último item para o início
        thumb.prepend(thumbItems[thumbItems.length - 1]); // Move a última miniatura para o início
    }

    updateActiveItem(); // Atualiza a exibição do item correto
}

document.addEventListener("DOMContentLoaded", function () {
    const thumbs = document.querySelectorAll(".thumb-item img");

    // Inicializa os itens, garantindo que apenas o primeiro da lista seja visível
    updateActiveItem();

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", function () {
            moveItemToFront(index); // Move o item e a miniatura para o início
        });
    });
});

function updateActiveItem() {
    let listItems = document.querySelectorAll('.list .list-item');

    // Exibe apenas o primeiro item da lista
    listItems.forEach((item, index) => {
        item.style.display = index === 0 ? "flex" : "none";
    });
}

function moveItemToFront(index) {
    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

    // Obtém o item e a miniatura que foram clicados
    let selectedItem = listItems[index];
    let selectedThumb = thumbItems[index];

    // Move o item da lista e a miniatura para o início da lista
    list.prepend(selectedItem);
    thumb.prepend(selectedThumb);

    // Atualiza a exibição para mostrar apenas o novo primeiro item
    updateActiveItem();
}
