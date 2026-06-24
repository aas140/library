
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
        const item = document.createElement("li");

        const title = document.createElement("h3");
        title.innerText = book.title;
        
        const auth = document.createElement("p");
        auth.innerText = `By ${book.author}`;

        const pages = document.createElement("p");
        pages.innerText = `Pages ${book.pages}`;

        const readCheckbox = document.createElement("input");
        readCheckbox.type = "checkbox";
        readCheckbox.checked = book.read;
        const label = document.createElement("label");
        label.textContent = "Read";

        item.appendChild(title);
        item.appendChild(auth);
        item.appendChild(pages);
        item.appendChild(label);
        item.appendChild(readCheckbox);
        list.appendChild(item);
        console.log(list);
        

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

    display();
    
    dataform.reset();
    mydialog.close();
})

display();

