const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click', function(){
    const chapterTest = input.value.trim();

    if (chapterTest !== '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = chapterTest;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        deleteButton.addEventListener('click', function(){
            listItem.remove();
            input.focus();
        })

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        input.focus();
        input.value = '';
    }
})