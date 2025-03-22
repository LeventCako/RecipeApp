import React from "react";
import commentData from "./commentData";


 
function Comment({author, text }) {



   

    return (
        <>
            <div className="comment">
                <p><strong>{author}</strong></p>
                <p>{text}</p>
            </div>
        </>
    );
}






export default Comment;
