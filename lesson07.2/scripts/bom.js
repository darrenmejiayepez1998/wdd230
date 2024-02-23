const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); 

// this is meant to load exsisting chapters
let chaptersArray = getChapterList() || [];

// add chapter to list 
function displayList(item) {
    let listItem = document.createElement('li');
    let deleteButton = document.createElement('button');
    listItem.textContent = item;
    deleteButton.textContent ='❌';
    deleteButton.classList.add('delete');

    // event listener to remove chapter
    deleteButton.addEventListener('click', function(){
        listItem.remove();
        input.focus();
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}

// sets the local storage item
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// this gets the chapters from local storage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// this will delete the chapter from the list and localstorage
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

// Event listener for the 'add chapter' button
button.addEventListener('click', function () {
    const chapterText = input.value.trim();

    if (chapterText !== '') {
        displayList(chapterText);
        chaptersArray.push(chapterText);
        setChapterList();
        input.value = '';
        input.focus();
    }
});