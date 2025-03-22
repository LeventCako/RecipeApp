import React, { useState } from "react";

function CommentForm({ onAddComment }) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author && text) {
      onAddComment({
        id: Date.now(),
        author,
        text,
      });
      setAuthor("");
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="usernameComment"
        type="text"
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea className="commentBar"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="submitCommentBtn" type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
