import React from "react"
import {FaGithub} from 'react-icons/fa'
import './contributors.css'

const contributers = () => {
    return (
        <div>
            <ul>Evan Sterling Miller
                <a href="https://github.com/EvanSterlingMiller">
                    <p>
                        <FaGithub className="FaGithub"/> 
                    </p>
                </a>
            </ul>
            <ul>Sudarshan Samaddar
                <a href="https://github.com/meetsudarshan">
                    <p>
                        <FaGithub className="FaGithub"/> 
                    </p>
                </a>
            </ul>
            <ul>Jacob Rubino
                <a href="https://github.com/JacobRubino">
                    <p>
                        <FaGithub className="FaGithub"/> 
                    </p>
                </a>
            </ul>
            <ul>Matt Fleming
                <a href="https://github.com/chartpro-com">
                    <p>
                        <FaGithub className="FaGithub"/> 
                    </p>
                </a>
            </ul>
            <ul>Roxy Osorio
                <a href="https://github.com/rosebudroro">
                    <p>
                        <FaGithub className="FaGithub"/> 
                    </p>
                </a>
            </ul>
        </div>
    )
}
export default contributers