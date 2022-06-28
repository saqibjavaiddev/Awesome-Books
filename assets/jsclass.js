const bookForm = document.querySelector('#book-form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const booksList = document.querySelector('#book-list');
  
class Book {  
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    if (id !== undefined) {  
      this.id =  id;
    }
  }

    static books =  JSON.parse(localStorage.getItem('books')) || [];

    add() {
      Book.books.push(this);  
      localStorage.setItem('books', JSON.stringify(Book.books));  
    }  

    remove() {  
      const removeId = parseInt(this.id, 10);
      console.log(removeId);
      let booklist = Book.books;
      booklist =  booklist.filter((element, index) => index !== removeId);
      Book.books =  booklist;  
      localStorage.setItem('books', JSON.stringify(booklist));
      window.location.reload();  
    }  
    get theDisplay() {  
      let bookHtml = '';  
      Book.books = JSON.parse(localStorage.getItem('books'));
      if (Book.books === null) {
        Book.books = [];
      }
      Book.books.forEach((item, index) => {
        bookHtml += ` 
          <div class="book"> 
          <p class="book-info">"${item.title}" by </p>
          <p class="book-info"> ${item.author}</p>
          <button type="button" class="remove-btn" id="${index}">Remove</button>
          </div>  
          `;  
      });   

      booksList.innerHTML =  bookHtml;
    }
}

bookForm.addEventListener('submit',   () => {
  const newBook = new Book(bookTitle.value,   bookAuthor.value);
  newBook.add();
});

const getBooks = new Book(bookTitle.value,   bookAuthor.value);
getBooks.theDisplay;

const removeBtn = document.querySelectorAll('.remove-btn' );
removeBtn.forEach((item) =>  item.addEventListener('click', ()  =>  {
  const removeBook = new  Book(bookTitle.value, bookAuthor.value, item.id);
  removeBook.remove();
})); 