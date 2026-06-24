
const lib = [];

const list = document.querySelector(".list");

const addbtn = document.querySelector(".addBtn");

const savebtn = document.querySelector(".save-book");

const mydialog = document.querySelector("dialog");

const dataform = document.querySelector("form");

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

addbtn.addEventListener('click', () =>{
    mydialog.showModal();
})

dataform.addEventListener('submit', (e) =>{
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    addBookToLib(title, author, pages, read);

    console.log(lib);
    
    dataform.reset();
    mydialog.close();
})


