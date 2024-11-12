// import React, { useState } from "react";
// import SearchBar from "./components/SearchBar";
// import BookCard from "./components/BookCard";

// const App = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchBooks = async (title) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
//       const data = await response.json();
//       setBooks(data.docs.slice(0, 10));
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1>Book Finder</h1>
//       <SearchBar onSearch={fetchBooks} />
//       {loading && <p>Loading...</p>}
//       <div className="book-list">
//         {books.map((book) => (
//           <BookCard key={book.key} book={book} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (query, searchType) => {
    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?${searchType}=${query}`);
      const data = await response.json();
      setBooks(data.docs.slice(0));
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Book Finder</h1>
      <SearchBar onSearch={fetchBooks} />
      {loading && <p>Loading...</p>}
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;
