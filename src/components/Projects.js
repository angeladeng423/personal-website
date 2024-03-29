import React, { useEffect, useState } from "react";
import githubImg from '../images/github.png';
import Popup from "./Popup";
import "./Projects.css";
import Skills from "./Skills";

export default function Projects(props) {
    const [skills, setSkills] = useState([""])
    const [addButtonPopup, setAddButtonPopup] = useState(false);

    useEffect(() => {
        setSkills(props.skills)

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
    };
    }, []);

    return (
        <div>
            <section className = "hidden" id = "project">
                <div id = "img-body">
                    <img src = {props.img} alt = "cover-img"></img>
                    <div id = "container">
                        <div id = "info"><h1>{props.title}</h1> <a href = {props.link}><img id = "git-img" src = {githubImg} alt = "github-icon"></img></a></div>
                        <h3 onClick={() => setAddButtonPopup(true)}>Learn More...</h3>
                        <p>{props.desc}</p>
                    </div>
                </div>
                <div id = "skill-body">
                    {skills.map((skilltxt, index) => (
                        <div key={index}><Skills skill = {skilltxt}/></div>
                    ))}
                </div>
            </section>
            <Popup
                title = {props.title}
                date = {props.date}
                description = {props.detailed}
                trigger = {addButtonPopup} setTrigger = {setAddButtonPopup}/>
        </div>
    );
}
