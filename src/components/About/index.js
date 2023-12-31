import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBitbucket, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

    return (
        <>
        <div className = "container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                I am a flexible and reliable individual equipped with a good skill set and excellent command of language. 
                Currently seeking an role in software development company to face more challenging and diverse projects.
                </p>
                <p>
                    I am quietly confident, naturally curious, 
                    and prepetually working on improving my skills.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family person, a cryptocurrency trader, a 
                    gamer, and tech-obsessed!!!
                </p>
            </div>

            <div className="stage-cube-cont">
            <div className="cubespinner">
            <div className="face1">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D2B" />
            </div>
            <div className="face6">
                <FontAwesomeIcon icon={faBitbucket} color="#1A74ED" />
            </div>
            </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About