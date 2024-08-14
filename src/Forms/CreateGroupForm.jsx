import style from "./CreateGroupForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateGroup() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [author, setAuthor] = useState("");
const [languageOne, setLanguageOne] = useState("HTML");
const [languageTwo, setLanguageTwo] = useState("HTML");
const [languageThree, setLanguageThree] = useState("HTML");
const [languageFour, setLanguageFour] = useState("HTML");
const [frontEndFramework, setFrontEndFramework] = useState("Springboot");
const [backEndFramework, setBackEndFramework] = useState("React");


const navigate = useNavigate();
const user = JSON.parse(sessionStorage.getItem("user"));


const handleSubmit = async (e) => {
  e.preventDefault();
  const memberId = user.memberId;
  const project = {
    title,
    description,
    author,
    languageOne,
    languageTwo,
    languageThree,
    languageFour,
    frontEndFramework,
    backEndFramework,
    memberId,
  };
  try {
    const response = await fetch("http://localhost:8080/api/project/addProject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    console.log(project);
    if (response.ok) {
      alert("Sign up successful");
      navigate("/LFG");
    } else {
      alert("Error: Sign up unsuccesful");
    }
  } catch (e) {
    console.log(e);
  }
};

return (
  <>
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <h2>Create Post</h2>
      <div className={style.inputContainer}>
        <input
          type="text"
          placeholder="enter Title"
          value={title}
          onChange= {(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <input
          type="text"
          placeholder="enter your name"
          value={author}
          onChange= {(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <textarea
          placeholder="enter description"
          value={description}
          onChange= {(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <label>Programming languages requirement:</label>
      <div className={style.inputContainer}>
        <select
          onChange={(e) => setLanguageOne(e.target.value)}
          value={languageOne}
          className={style.option}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
      </div>
      <div className={style.inputContainer}>
        <select
          onChange= {(e) => setLanguageTwo(e.target.value)}
          value={languageTwo}
          className={style.option}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
      </div>
      <div className={style.inputContainer}>
        <select
          onChange= {(e) => setLanguageThree(e.target.value)}
          value={languageThree}
          className={style.option}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
      </div>
      <div className={style.inputContainer}>
        <select
          onChange= {(e) => setLanguageFour(e.target.value)}
          value={languageFour}
          className={style.option}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
      </div>

      <label>FrontEnd Framework:</label>
      <div className={style.inputContainer}>
        <select
          onChange= {(e) => setFrontEndFramework(e.target.value)}
          value={frontEndFramework}
          className={style.option}
        >
          <option value="React">React</option>
          <option value="Angular">Angular</option>
        </select>
      </div>

      <label>BackEnd Framework:</label>
      <div className={style.inputContainer}>
        <select
          onChange= {(e) => setBackEndFramework(e.target.value)}
          value={backEndFramework}
          className={style.option}
        >
          <option value="Springboot">Springboot</option>
          <option value="Django">Django</option>
          <option value="Flask">Flask</option>
          <option value="Express.js">Express.js</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  </>
);
}

export default CreateGroup;