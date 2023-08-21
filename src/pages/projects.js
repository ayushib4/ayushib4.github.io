import '../index.css';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Project from '../components/project';
import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import origin from '../images/origin.png';
import nexpert from '../images/nexpert.png';
import smartfin from '../images/smartfin.png'

function ProjectPage() {
    const projects = [
        {
            id: "1",
            name: "Origin",
            description: "Origin is a browser history organizer that offers context-aware workspaces with a semantic search, an AI-generated summary, recommendation systems, etc.",
            awards: "Awarded Best Hack Using Frontier Tech by Pear VC at Stanford's TreeHacks 2023.",
            imageUrl: origin,
            url: "https://devpost.com/software/pathfinder-em2qjb",
            github: "https://github.com/pgasawa/origin"
        },
        {
            id: "2",
            name: "Nexpert",
            description: "An open-source research tool that fast-tracks the concept discovery process, making you the next expert on any topic based on the literature.",
            awards: "Developed at Anthropic's Claude 2 Hackathon.",
            imageUrl: nexpert,
            url: "https://devpost.com/software/nexpert",
            github: "https://github.com/ayushib4/nexpert"
        },
        {
            id: "3",
            name: "smartFin",
            description: "smartFin brings smart financial advice catered to your banking data and financial goals through our version of Mr. Wonderful, a generative AI agent that takes on the personality of the real Mr. Wonderful to give you personalized advice.            ",
            awards: "Developed at UC Berkeley's AI Hackathon.",
            imageUrl: smartfin,
            url: "https://devpost.com/software/smartfin",
            github: "https://github.com/ayushib4/smartFin"
        }
    ]
    return (
        <>
            <FontAwesomeIcon icon={faHome} size="xl" style={{ cursor: 'pointer' }} onClick={() => window.location.href = "/"} className="home" />
            <FadeIn>
                <div className='projectPage'>
                    {projects.map((project) => (
                        <Project
                            key={project.id}
                            name={project.name}
                            description={project.description}
                            awards={project.awards ?? ""}
                            imageUrl={project.imageUrl}
                            url={project.url}
                            github={project.github}
                        />
                    )
                    )}
                </div>
            </FadeIn>
        </>
    )
}

export default ProjectPage;