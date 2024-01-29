const sortableList = document.querySelectorAll(".sortable-list")
const items = document.querySelectorAll(".item");

items.forEach( item => {
    item.addEventListener('dragstart', () => {
        //item.classList.add('dargging');
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = sortableList.querySelector(".dragging");

    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    // console.log(nextSibling)
    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragender", e => e.preventDefault());