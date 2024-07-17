import style from './LandingPage.module.css';
import { useEffect, useState } from 'react';


function LandingPage(){
    const [currentHeader, setHeader] = useState('');

    useEffect(() => {
        const text = "Welcome to Phay Group Project!";
        let index = 0;

        const interval = setInterval (() => {
            if (index <= text.length){
                setHeader(text.slice(0,index));
                index++;
            }else{
                clearInterval();
            }
        }, 80);
        return () => clearInterval(interval);
    }, [])


    return(
        <>
        <body>
        <div className= {style.heroContainer}>
            <div className= {style.content}>
                <h1>{currentHeader}</h1>
            <p>This site is dedicated to <b>Computer Science Metro student </b> to help guide them to prepare for their careers. This Website is dedicated to help students
            group up with other students to create personal projects. Sometimes it can be difficult to start a project by yourself. However, it can be easier to start together with other people.
            People can published their project ideas and students can request if they can join. This can help you learn new languages and new frameworks.<b> So Sign up now and Get Started!</b>
             </p>
            </div>
            <div className= {style.imageContainer}>
                <img src="/PhayStudy.jpg" alt="Phay study image" />
            </div>
        </div>

        <div className = {style.aboutMeContainer}>
            <div className= {style.aboutContent} >
            <h1>About Me</h1>
             <p>My name is Dara Phay (Pie), and I am a 2024 graduate of Metro State University with a Bachelor's degree in Computer Science. I also hold an Associate of Science degree in Engineering Broadfield from Normandale Community College. I enjoy following the Minnesota Timberwolves and Vikings. 
                The reason I built this website to help people succeed in their lives. My cousin was a big role model of my life who helped me get to where I am today. I want to help others like how she helped me.</p>
                <p>When I transferred to become a Computer Science major, I was unprepared for the challenges I faced. During my first year at Metro State, I felt overwhelmed by the things I needed to know outside of school, such as unfamiliar frameworks and additional programming languages. Initially, I wanted to become a Mechanical Engineer, but I developed a passion for programming.</p>
                <p>I created this site to provide students with a central hub where they can enhance their learning, find guidance, and enjoy their interests. Here, you will find the resources you need to succeed.</p>
            </div> 
            <div className= {style.aboutMeImageContainer}>
                <img src="/Me.jpg" alt="Dara Phay image" />
            </div>
        </div>

        </body>
        </>
    );
}

export default LandingPage;