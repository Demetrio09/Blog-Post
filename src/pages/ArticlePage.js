import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import ArticleList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const { name } = useParams();

  const article = articleContent.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragrapah, key) => (
        <p key={key}>{paragrapah}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticleList articles={otherArticles} />
    </div>
  );
};

export default ArticlePage;
