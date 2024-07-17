import style from './Form.module.css';
import { useState} from 'react';



function SignUpForm(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {

        const user = {firstName,lastName,email,password};

        try{
            const response = await fetch('http://localhost:8080/user/signup', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(user),
            });

            if (response.ok){
                alert("Sign up successful");
            }else{
                alert("Error: Sign up unsuccesful");
            }
        }catch (e){
            console.log(e);
        }
    
    }
    
    return (
        <>
        <div className= {style['sign-up-container']}>
            <form onSubmit={handleSubmit} >
                <h1>Sign Up</h1>
                <div className = {style.input}> 
                    <input type="text" placeholder='enter your first name' value = {firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className = {style.input}>
                 <input type="text" placeholder='enter your last name' value = {lastName} onChange = { (e) => setLastName(e.target.value)} />
                </div>
                <div className = {style.input}>
                    <input type="email" placeholder='enter your email name' value = {email} onChange = {(e) => setEmail(e.target.value)} />
                </div>
                <div className = {style.input}>
                    <input type="password" placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div > 
                <div  className= {style.loginButton}>
                    <button type = "submit">Sign Up</button>
                </div>
        </form>
        </div>
        </>
    );
}

export default SignUpForm;