import style from "./LookingForGroup.module.css";
import { useState } from "react";

function CreateGroup() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [languageOne, setLanguageOne] = useState("");
  const [languageTwo, setLanguageTwo] = useState("");
  const [languageThree, setLanguageThree] = useState("");
  const [languageFour, setLanguageFour] = useState("");
  const [languageFive, setLanguageFive] = useState("");
  const [frontFramework, setFontFramework] = useState("");
  const [backFramework, setBackFramework] = useState("");

  const handleSubmit = (e) => {};

  return (
    <>
      <h2 className={style.title}>Create your Post! Collaborate with others</h2>
      <div className={style.container}>
        <button className={style.createButton}>Create a post</button>
      </div>

      <form action={handleSubmit} className={style.formContainer}>
        <h2>Create Post</h2>
        <div className={style.inputContainer}>
          <input type="text" placeholder="enter Title" />
        </div>
        <div className={style.inputContainer}>
          <input type="text" placeholder="enter your name" />
        </div>
        <div className={style.inputContainer}>
          <textarea placeholder="enter description"></textarea>
        </div>

        <label>Programming languages requirement:</label>
        <div className={style.inputContainer}>
          <select>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <select>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <select>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <select>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <select>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>
        <select>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
        </select>
        <select>
          <option value="HTML">Springboot</option>
          <option value="Django">Django</option>
          <option value="Flask">Flask</option>
          <option value="Express.js">Express.js</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default CreateGroup;
