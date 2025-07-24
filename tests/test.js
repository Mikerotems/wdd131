const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    listText.textContent = myItem;
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    button.addEventListener('click', () => {
        list.removeChild(listItem);
    })
    input.focus;
})