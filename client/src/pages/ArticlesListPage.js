import React from "react";
import ArticleList from "../components/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => {
  return (
    <div>
      <h1>Articles:</h1>
      <ArticleList articles={articleContent} />
    </div>
  );
};

export default ArticlesListPage;
