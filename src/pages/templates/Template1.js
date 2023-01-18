import React from 'react'
import "../../resources/template.css"

function Template1() {

    const user = JSON.parse(localStorage.getItem("Resumebuild-user"))
    return (
        <div className='template1-parent'>
            <div className='top d-flex flex-column'>
                <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
                <div>
                    <p>{user.email}</p>
                    <p>{user.address}</p>
                    <p>{user.mobileNumber}</p>
                </div>
            </div>
            <div className='divider mt-3'></div>
            <div className='divider mt-1'></div>
            <div className='objective mt-4'>
                <h3 style={{ backgroundColor: "gray", padding: 7 }}>Objective</h3>
                <hr />
                <p>{user.carrierObjective}</p>
            </div>
            <div className='divider mt-3'></div>
            <div className='education mt-4'>
                <h3 style={{ backgroundColor: "gray", padding: 7 }}>Education</h3>
                <hr />
                {user.education.map((education) => {
                    return <div className='d-flex align-items-center'>
                        <h6 style={{ width: 120 }}><b>{education.range} : </b></h6>
                        <p><b>{education.Qualification}</b> with <b>{education.percentage}</b>% in <b>{education.institution}</b></p>
                    </div>
                })}
            </div>
            <div className='divider mt-3'></div>
            <div className='experience mt-4'>
                <h3 style={{ backgroundColor: "gray", padding: 7 }}>Experience</h3>
                <hr />
                {user.experience.map((exp) => {
                    return <div className='d-flex align-items-center'>
                        <h6 style={{ width: 120 }}><b>{exp.range} : </b></h6>
                        <p><b>{exp.company}</b> In <b>{exp.place}</b></p>
                    </div>
                })}
            </div>
            <div className='divider mt-3'></div>
            <div className='projects mt-4'>
                <h3 style={{ backgroundColor: "gray", padding: 7 }}>Projects</h3>
                <hr />
                {user.projects.map((project) => {
                    return <div className='d-flex flex-column'>
                        <h6><b>{project.title} [{project.yearrange}]</b></h6>
                        <p>{project.description}</p>
                    </div>
                })}
            </div>
            <div className='divider mt-3'></div>
            <div className='projects mt-4'>
                <h3 style={{ backgroundColor: "gray", padding: 7 }}>Skills</h3>
                <hr />
                {user.skills.map((skill) => {
                    return <div className='d-flex flex-column'>
                        <p><b>{skill.technology}</b></p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Template1

