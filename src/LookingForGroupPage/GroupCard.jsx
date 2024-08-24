import React from "react";
import style from "./LookingForGroup.module.css";

function GroupCard({project}) {
  return (
    <div className={style.projectContainer}>
      <h2 className={style.projectTitle}>{project.title}</h2>
      <p className={style.projectAuthor}>{project.author}</p>
      <p className={style.projectDescription}>{project.description}</p>

     
      <label >Technology Stack:</label>
        <ul className= {style.listContainer}>
          <li>{project.languageOne}</li>
          <li>{project.languageTwo}</li>
          <li>{project.languageThree}</li>
          <li>{project.languageFour}</li>
          <li>{project.frontEndFramework}</li>
          <li>{project.backEndFramework}</li>
        </ul>

        <div className={style.container}>
        <button className= {style.projectButton}>Collaborate</button>
        </div>
    </div>
  );
}

export default GroupCard;
