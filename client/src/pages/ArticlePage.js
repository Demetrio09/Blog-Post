import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./articles-content";
import ArticleList from "../components/ArticlesList";
import UpvoteSection from "../components/UpvoteSection";
import CommentsList from "../components/CommentsList";
import NotFoundPage from "./NotFoundPage";
import AddCommentForm from "../components/AddCommentForm";

const ArticlePage = () => {
  const { name } = useParams();

  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({
    _id: "",
    upvotes: 0,
    comments: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };

    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <div>
      <h1>{article.title}</h1>
      <UpvoteSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      <br />
      {article.content.map((paragrapah, key) => (
        <p key={key}>{paragrapah}</p>
      ))}
      <h4>Comments:</h4>
      {articleInfo.comments.length ? (
        <CommentsList comments={articleInfo.comments} />
      ) : (
        <p>No comments yet!</p>
      )}
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles:</h3>
      <ArticleList articles={otherArticles} />
    </div>
  );
};

export default ArticlePage;
