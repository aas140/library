
const lib = [];

const list = document.querySelector(".list");

function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLib(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    lib.push(book);
}

function display(){
    list.innerHTML = "";
    lib.forEach((book) =>{
        // create a card and add to DOM

    })
}
