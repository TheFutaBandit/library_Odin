//Initializations
const container = document.querySelector('.container')
const header = container.querySelector('.header')
const library = container.querySelector('.library')
const addButton = container.querySelector('.add-button')
const modal = addButton.querySelector('.book-modal');
const book_form = modal.querySelector('#book-submission')

// const bookItem = library.querySelector('.book')

//Objects
const myLibrary = [];

//functions

function book(book_name,book_author,book_pages) {
    this.book_name = book_name
    this.book_author = book_author
    this.book_pages = book_pages
}

function addBookToLibrary(book) {
    myLibrary.push(book)

}

function setBookAttribute(parentNode,nodeName,bookObj) {
    const element = document.createElement("div");
    element.classList.add(nodeName);
    element.textContent = bookObj[nodeName];
    parentNode.appendChild(element);
}

function setBookStatus(parentNode,nodeName,bookObj) {
    const element = document.createElement("button");
    element.classList.add(nodeName);
    element.textContent = "not-read";
    parentNode.appendChild(element);

    let flag = false;

    element.addEventListener("click", (event) => {
        flag = !flag;
        if(flag == true) element.textContent = "read";
        else element.textContent = "not-read";
    })
}

function removeBookFromArray(idx) {
    myLibrary.splice(idx,1);
    let index = 0;
    for(const item of library.children) {
        // console.log(item);
        item.setAttribute("data-index",index);
        index += 1;
    }
}


function setBookDelete(parentNode,nodeName,bookObj,bookItem) {
    const element = document.createElement("button");
    element.classList.add(nodeName);
    element.textContent = "delete";
    parentNode.appendChild(element);


    element.addEventListener("click", () => {
        library.removeChild(bookItem);
        let idx = bookItem.dataset.index;
        // console.log(bookItem.dataset.index)
        removeBookFromArray(idx)
    })
}

function fillBook(bookItem,bookObj) {  
    setBookAttribute(bookItem,"book_name",bookObj);
    setBookAttribute(bookItem,"book_author",bookObj);
    setBookAttribute(bookItem,"book_pages",bookObj);
    setBookStatus(bookItem,"book_status",bookObj);
    setBookDelete(bookItem,"book_delete",bookObj,bookItem);
}

// function addDeleteEvent(bookItem,bookObject) {
//     const tt = bookItem.querySelector(".book_delete");
//     tt.addEventListener("click", (event) => {
//         library.removeChild(bookItem)
//     })
// }

function libraryDisplay(bookObject) {

    const bookItem = document.createElement("div");
    bookItem.classList.add("book");
    
    bookItem.setAttribute('data-index', myLibrary.indexOf(bookObject));
    fillBook(bookItem,bookObject);
    library.appendChild(bookItem);

    // addDeleteEvent(bookItem,bookObject);
}






//bootup    

let book1 = new book("gooning","pokimane",69);
let book2 = new book("gooning","pokimane",69);

addBookToLibrary(book1);
addBookToLibrary(book2);




for(let i = 0; i < myLibrary.length; i++) {
    libraryDisplay(myLibrary[i]);
}

addButton.addEventListener('click', () => {
    modal.showModal();
})

book_form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form_data = new FormData(book_form);
    const book_data = Object.fromEntries(form_data)
    const bookInput = new book(book_data["book_name"],book_data["book_author"],book_data["book_pages"],book_data["book_status"]);

    addBookToLibrary(bookInput);
    libraryDisplay(bookInput);


    modal.close();
})










