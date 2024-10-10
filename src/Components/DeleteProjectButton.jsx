import style from "../styles/Components/DeleteButton.module.css";
import { Navigate, useNavigate } from "react-router-dom";

function DeleteProjectButton({project}){
    const navigate = useNavigate();
    const projectId = parseInt(project.projectId, 10);
    const handleDelete = async (e) => {
        e.preventDefault();
        try{
            const deleteResponse = await fetch(`http://localhost:8080/api/project/deleteProject/${projectId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(project)
            });

            if(deleteResponse.ok){
                alert("project deleted!");
                navigate("/LFG");
            }else{
                alert("FAIL");
            }
            
        }catch(e){
            console.log(e);
        }
    }


    return(
        <button className = {style.deleteButton} onClick = {handleDelete}> Delete me</button>
    );
}

export default DeleteProjectButton;
