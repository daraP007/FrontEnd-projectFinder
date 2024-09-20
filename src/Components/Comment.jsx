import React, { useState } from "react";
import style from "../styles/Components/Comment.module.css";
import { useParams } from "react-router-dom";

function Comment({projectId}) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  

  const handleSubmit = async () => {
    
    try {
      const response = await fetch("http://localhost:8080/api/comment/addComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(user);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("comment saved");
      } else {
        alert("comment failed");
      }
    } catch (e) {
      console.log(e);
    }
  }
  

  return (
    <div className= {style.commentContainer}>
      <form className = {style.form} >
        <h3>{user.userName}</h3>
        <textarea placeholder="enter a comment"></textarea>
        <button onSubmit = {handleSubmit}>Enter</button>
      </form>
    </div>
  );
}

export default Comment;
