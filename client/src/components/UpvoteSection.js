import React from "react";

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  return (
    <div id='upvotes-section'>
      <button onClick={() => upvoteArticle()}>Add Upvote</button>
      <h4>This article has been upvoted {upvotes} times.</h4>
    </div>
  );
};

export default UpvoteSection;
