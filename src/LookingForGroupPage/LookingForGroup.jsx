import style from "./LookingForGroup.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GroupCard from "./GroupCard";

function FindGroup() {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/createPost"); // Navigate to the new form page
  };

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/project/allProject",
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        ); 
        if (response.ok) {
          const data = await response.json();
          setProjectList(data);
          setLoading(false);
        } else {
          console.log("can't retrieve all the projects");
        }
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  return (
    <>
      <h2 className={style.title}>Create your Post! Collaborate with others</h2>
      <div className={style.container}>
        <button className={style.createButton} onClick={handleButtonClick}>
          Create a post
        </button>
       
      </div>
      <input type="text" placeholder="search" />
      <div className={style.projectListContainer} >
        {projectList.map((project) => (
          <GroupCard key={project.projectId} project={project} />
        ))}
      </div>
    </>
  );
}

export default FindGroup;
