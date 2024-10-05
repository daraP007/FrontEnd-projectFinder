import React, { useState } from "react";
import style from "../styles/Components/Comment.module.css";
import { useParams } from "react-router-dom";

function CreateComment({projectId}) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [description, setDescription] = useState("");
  
  
  const handleSubmit = async (e) => {
    const memberId = user.memberId;
    const author = user.userName;
    console.log(projectId);
    const comment = {
      memberId,
      author,
      description,
      projectId
    }

    try {
      const response = await fetch("http://localhost:8080/api/comment/addComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });

      console.log(user);

      if (response.ok) {
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
      <form className = {style.form} onSubmit={handleSubmit} >
        <label>enter a comment</label>
        <textarea placeholder="enter a comment" value = {description} onChange = {(e) => setDescription(e.target.value)}></textarea>
        <button type = "submit">Enter</button>
      </form>
    </div>
  );
}

export default CreateComment;
