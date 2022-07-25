// Variables
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const button = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

button.addEventListener("click", function(){
    if(titleInput.value == "" && authorInput.value == "" && isbnInput.value == ""){
        alert("Qatorlarni toldiring!");
    }else {
        const bookListRow = document.createElement("tr")

        const newTitle = document.createElement("th");
        newTitle.innerHTML = titleInput.value;
        bookListRow.appendChild(newTitle);
        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = authorInput.value;
        bookListRow.appendChild(newAuthor);
        const newISBN = document.createElement("th");
        newISBN.innerHTML = isbnInput.value;
        bookListRow.appendChild(newISBN);

        bookList.appendChild(bookListRow);

        titleInput.value = ''
        author.value = ''
        isbn.value = ''
    }
})