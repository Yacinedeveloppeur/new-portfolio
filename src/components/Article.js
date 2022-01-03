import React from "react";

function Article({ title, text }) {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__container__article">
          <h2 className="main__container__article__title">{title}</h2>
          <p className="main__container__article__text">{text}</p>
        </div>
      </div>
    </main>
  );
}

export default Article;
