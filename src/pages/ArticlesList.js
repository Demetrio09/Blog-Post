import React from "react";
import { Link } from "react-router-dom";
import articleContent from "./article-content";

const ArticlesList = () => {
  return (
    <div>
      {articleContent.map((article, key) => (
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
};

export default ArticlesList;
