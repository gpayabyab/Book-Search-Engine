const typeDefs = `
type User {
    _id: 
    username: String
    email: String
    bookCount: 
    savedBooks: 
}

type Book {
    bookId: String
    authors: String
    description: String
    title: String
    image: String
    link: string
}

type Auth {
    token: 
    user: User
}

type Query {
    me: User
  }

  type Mutation {
    // login: Accepts an email and password as parameters; returns an Auth type.
    login(email:String!, password:String!: Auth
    // addUser: Accepts a username, email, and password as parameters; returns an Auth type.
    addUser(username:String!, email:String!, password:String!): Auth
    // saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)
    saveBook (authors!, description!, title!, bookId!, image!, link!)= User
    // removeBook: Accepts a book's bookId as a parameter; returns a User type.
    removeBook(bookId!)= User
  }
`;

module.exports = typeDefs;