const myLibrary = [];


function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
    const libraryDiv = document.getElementById('library');
    if (libraryDiv) {
        libraryDiv.innerHTML = ''; // Clear previous entries
    }
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.setAttribute('data-index', index.toString());

        const bookInfo = document.createElement('p');
        bookInfo.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? 'Read' : 'Not Read'}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });

        const toggleButton = document.createElement('button');
        toggleButton.textContent = book.read ? 'Mark as Unread' : 'Mark as Read';
        toggleButton.addEventListener('click', () => {
            book.read = !book.read;
            displayBooks();
        });

        bookCard.appendChild(bookInfo);
        bookCard.appendChild(removeButton);
        bookCard.appendChild(toggleButton);
        libraryDiv.appendChild(bookCard);
    });
    var book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
    addBookToLibrary(book);

}}

