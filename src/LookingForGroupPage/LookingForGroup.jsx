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


  const handleChange = (e) => {
    setTitle(e.target.value);
    setDescription(e.target.value);
    setAuthor(e.target.value);
    setLanguageOne(e.target.value);
    setLanguageTwo(e.target.value);
    setLanguageThree(e.target.value);
    setLanguageFour(e.target.value);
    setLanguageFive(e.target.value);
    setFontFramework(e.target.value);
    setBackFramework(e.target.value);
  };
  const handleSubmit = async (e) => {
    const project = {title,description,author,languageOne,languageTwo,languageThree,languageFour,languageFive,frontFramework,backFramework};
    try{
      const response = await fetch('http://localhost:8080/api/project' , {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(project),
      })
      if (response.ok){
        alert("Sign up successful");
    }else{
        alert("Error: Sign up unsuccesful");
    }
}catch (e){
    console.log(e);
}
    
  };
  


  return (
    <>
      <h2 className={style.title}>Create your Post! Collaborate with others</h2>
      <div className={style.container}>
        <button className={style.createButton}>Create a post</button>
      </div>

      <form action={handleSubmit} className={style.formContainer}>
        <h2>Create Post</h2>
        <div className={style.inputContainer}>
          <input type="text" placeholder="enter Title" value = {title} onChange={handleChange}/>
        </div>
        <div className={style.inputContainer}>
          <input type="text" placeholder="enter your name" value = {author} onChange={handleChange} />
        </div>
        <div className={style.inputContainer}>
          <textarea placeholder="enter description" value ={description} onChange={handleChange}></textarea>
        </div>

        <label>Programming languages requirement:</label>
        <div className={style.inputContainer}>
          <select onChange = {handleChange} value = {languageOne} >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <select onChange = {handleChange} value={languageTwo}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <select onChange = {handleChange} value={languageThree}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>
        <div className={style.inputContainer}>
          <select onChange = {handleChange} value={languageFour}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>
        <div className={style.inputContainer} >
          <select onChange = {handleChange} value={languageFive}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>

        <label >FrontEnd Framework:</label>
        <div className={style.inputContainer} >
        <select onChange = {handleChange} value={frontFramework}>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
        </select>
        </div>

        <label >BackEnd Framework:</label>
        <div className={style.inputContainer} >
        <select onChange = {handleChange} value={backFramework}>
          <option value="HTML">Springboot</option>
          <option value="Django">Django</option>
          <option value="Flask">Flask</option>
          <option value="Express.js">Express.js</option>
        </select>
        </div>

        <button type= "submit" >Submit</button>
      </form>
    </>
  );
}

export default CreateGroup;
