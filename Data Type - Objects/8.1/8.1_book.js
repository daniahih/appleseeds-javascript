// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, that
// will return the following description from your book object:
// ‘The book <book name> was written by <author name> in
// the year <publishing year>
const book={
Name: "harryPotter",
Auther:"adored smith",
publishingYear:1985,
reating:4.5
}
function bookInfo(book1){
    return console.log(`${book.Name} and his author is ${book.Auther} was publishing in ${book.publishingYear} and its reating is ${book.reating}`)
}
bookInfo(book)