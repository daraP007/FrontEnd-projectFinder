import style from './LandingPage.module.css';
import { useEffect, useState } from 'react';


function LandingPage(){
    const [currentHeader, setHeader] = useState('');

    useEffect(() => {
        const text = "Welcome to Phay Study!";
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
            <p>This site is dedicated to <b>Computer Science Metro student </b> to help guide them to prepare for their classes
            and their future. This Website will have a bunch of resource link for you to go to when you need help. Even with a guideline to help you prepare for 
            your career. This is currently still in the works. I hope to this site will help you in your education and career.
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