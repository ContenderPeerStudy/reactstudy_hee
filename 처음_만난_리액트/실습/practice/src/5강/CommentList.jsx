import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "hee",
        comment : "Hi, I'm hee",
    },
    {
        name: "jen",
        comment : "Hey! How u doin'?",
    },
    {
        name: "KIM",
        comment : "U wanna go to Maccas?",
    },
    
]
function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;