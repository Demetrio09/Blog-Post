import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => (
  <div>
    {articles.map((article, key) => (
      <Link
        to={`/article/${article.name}`}
        key={key}
        className='article-list-item'
      >
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}</p>
      </Link>
    ))}
  </div>
);

export default ArticleList;
