import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import style from "../styles/Components/PostDetails.module.css";
import CreateComment from "./CreateComment";
import GroupCard from "./GroupCard";
import CommentCard from "./CommentCard";

function ProjectPostDetails() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [showComment, setShowComment] = useState(false);
  const [commentList,setCommentList] = useState(null);


  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projectId = parseInt(id, 10);
  const url = `http://localhost:8080/api/project/${projectId}`;
  const urlTwo =`http://localhost:8080/api/comment/allComment/${projectId}`;

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const [projectResponse, commentResponse] = await Promise.all([
          fetch(url), 
          fetch(urlTwo)
        ]);

        if (projectResponse.ok || commentResponse.ok) {
          const projectData = await projectResponse.json();
          const commentData = await commentResponse.json();
          setProject(projectData);
          setCommentList(commentData);
          setLoading(false);
        } else {
          setError("Couldn't get project");
        }
      } catch (e) {
        setError("An error occurred while fetching the project");
        console.log(e);
      }
    };
    fetchInfo();
  }, [projectId, url,urlTwo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      
      <div className={style.layOut}>
        <div className={style.projectContainer}>
          <h2 className={style.projectTitle}>{project.title}</h2>
          <p className={style.projectAuthor}>{project.author}</p>
          <p className={style.projectDescription}>{project.description}</p>

          <label>Technology Stack:</label>
          <ul className={style.listContainer}>
            <li>{project.languageOne}</li>
            <li>{project.languageTwo}</li>
            <li>{project.languageThree}</li>
            <li>{project.languageFour}</li>
            <li>{project.frontEndFramework}</li>
            <li>{project.backEndFramework}</li>
          </ul>
        </div>
      </div>
    
      <CreateComment projectId = {projectId} /> 

      <div>
        {commentList.map((comment) => (
          <CommentCard key= {comment.commentId} comment = {comment}/>
        ))}
      </div>



    </>
  );
}

export default ProjectPostDetails;
