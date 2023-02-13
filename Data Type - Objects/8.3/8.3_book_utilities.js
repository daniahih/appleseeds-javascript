// 1. create 2 book objects with properties: name, author, year.

const book1={
    name:"harryPotter",
    author:"smith smith",
    year:1985
}

const book2={
    name:"RichDadPoorDad",
    author:"william gorge",
    year: 2012
}

// 2. create an empty object bookUtils (utils = short for utilities).
const bookUtils={
//     3. add to the bookUtils object a function getFirstPublished,
// that receives 2 books and returns the book with the
// smaller year.
getFirstPublished:function(book1,book2){
if(book1.year > book2.year){
    return book2
}
else{
    return book1
}
},
setNewEdition :function(book, editionYear) {
    book.latestEdition = editionYear;
},
setLanguage:function(book,language){
    book.language=language;
}, 
// 6. add to the bookUtils object a setTranslation function, that
// receives a book a language and a translator, and sets a
// new property of translation, which is an object that
// contains the translator and the language.
setTranslation:function( book,language,translator){
    book.translation={
        translator: translator,
        language:language

    }
},
// add to the bookUtils object a setPublisher function, that
// receives a book a name and location, and sets a new
// property named publisher, which is an object that contains
// the name and location.
setPublisher:function(book,name,location){
    book.publisher={
        name:name,
        location,location
    }

},
// 8. add to the bookUtils object a function isSamePublisher,
// which receives 2 books and checks if the publisher name
// and location are identical in the 2 books.

isSamePublisher:function(book1,book2){
    if(book1.publisher.name == book2.publisher.name && book1.publisher.location == book2.publisher.location ){

        return true 
    }
    else{
        return false 
    }


}

}

 console.log(bookUtils.getFirstPublished(book1,book2))
 bookUtils.setNewEdition(book1,1998)
bookUtils.setLanguage(book1,"english")
bookUtils.setTranslation(book1,"arabic","english")
bookUtils.setPublisher(book2,"dania","jerusalem")
bookUtils.setPublisher(book1,"dania","jerusalem")

console.log(book2)
console.log(bookUtils.isSamePublisher(book1,book2))