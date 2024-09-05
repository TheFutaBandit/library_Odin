//Initializations
const container = document.querySelector('.container')
const header = container.querySelector('.header')
const library = container.querySelector('.library')
const addButton = container.querySelector('.add-button')
const modal = addButton.querySelector('.book-modal');
// const bookItem = library.querySelector('.book')

//Objects
const myLibrary = [];

//functions

function book(book_name,book_author,book_pages,book_status) {
    this.book_name = book_name
    this.book_author = book_author
    this.book_pages = book_pages
    this.book_status = book_status
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

function fillBook(bookItem,bookObj) {  
    setBookAttribute(bookItem,"book_name",bookObj);
    setBookAttribute(bookItem,"book_author",bookObj);
    setBookAttribute(bookItem,"book_pages",bookObj);
    setBookAttribute(bookItem,"book_status",bookObj);
}




//bootup

book1 = new book("gooning","pokimane",69,"not-read");

addBookToLibrary(book1);


for(let i = 0; i < myLibrary.length; i++) {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book");
    fillBook(bookItem,myLibrary[i]);
    library.appendChild(bookItem);
}

addButton.addEventListener('click', () => {
    modal.showModal();
})





