import React, { useEffect } from "react";
import githubImg from '../images/github.png';
import "./Projects.css";

export default function Projects(props) {
    useEffect(() => {
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
                <img src = {props.img} alt = "cover-img"></img>
                <div id = "container">
                    <div id = "info"><h1>{props.title}</h1> <a href = {props.link}><img id = "git-img" src = {githubImg} alt = "github-icon"></img></a></div>
                    <p>{props.desc}</p>
                </div>
            </section>
        </div>
    );
}
