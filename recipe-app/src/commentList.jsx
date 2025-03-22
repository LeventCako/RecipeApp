import React from "react";
import Comment from "./userComment";

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          text={comment.text}
        />
      ))}
    </div>
  );
}

export default CommentList;