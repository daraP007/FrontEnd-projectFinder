import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import style from "./PostDetails.module.css";
import Comment from "../Comment/Comment";

function PostDetails() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [showComment, setShowComment] = useState(false);


  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projectId = parseInt(id, 10);
  const url = `http://localhost:8080/api/project/${projectId}`;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProject(data);
          setLoading(false);
        } else {
          setError("Couldn't get project");
        }
      } catch (e) {
        setError("An error occurred while fetching the project");
        console.log(e);
      }
    };
    fetchProject();
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleClick = () => {
    setShowComment(true);
  };
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

      <button onClick = {handleClick}>Comment on Post</button>
      {showComment && <Comment projectId= {projectId}/>}
    </>
  );
}

export default PostDetails;
