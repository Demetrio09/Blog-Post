import React from "react";

const CommentsList = ({ comments }) => (
  <div>
    {comments.map((comment, key) => (
      <div className='comment' key={key}>
        <h4>{comment.userName}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
  </div>
);

export default CommentsList;
