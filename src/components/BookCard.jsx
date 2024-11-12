import React from "react";

const BookCard = ({ book }) => {
  const { title, author_name, first_publish_year, cover_i } = book;
  const coverUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : "default-cover.jpg";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={title} />
      <h3>{title}</h3>
      <p>Author: {author_name ? author_name.join(", ") : "N/A"}</p>
      <p>Year: {first_publish_year || "N/A"}</p>
    </div>
  );
};

export default BookCard;
