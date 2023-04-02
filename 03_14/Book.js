

class Book {
    constructor(
        title,
        author,
        datePublished,
        ownership,
        includesBookmark
    ) {
        this.title = title;
        this.author = author;
        this.datePublished = datePublished;
        this.includesBookmark = includesBookmark;
        this.ownership = ownership;
    }
    newOwnership(name) {
        this.ownership = name;
    }
    toggleBookmark(status) {
        this.includesBookmark = status;
    }

}

export default Book;