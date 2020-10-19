import React from "react";
import ArticleList from "../components/ArticlesList";
import articlesContent from "./articles-content";

const ArticlesListPage = () => {
  return (
    <div>
      <h1>Articles:</h1>
      <ArticleList articles={articlesContent} />
    </div>
  );
};

export default ArticlesListPage;
