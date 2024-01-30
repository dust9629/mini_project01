const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

// 드래그 시작, 종료시 이벤트
items.forEach(item => {
    item.addEventListener('dragstart', () => {
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

// 드래그 리스트 초기화
const initSortableList = (e) => {
    e.preventDefault();

    // 드래깅 되는 객체의 형제 선택자 가져오기
    const draggingItem = sortableList.querySelector(".dragging");
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    // console.log(nextSibling)
    sortableList.insertBefore(draggingItem, nextSibling);
}

// 정렬된 리스트에 드래그 엔터
sortableList.addEventListener("dragover", initSortableList);
// 드래그 엔터 이벤트 기본 동작 방지
sortableList.addEventListener("dragenter", e => e.preventDefault());