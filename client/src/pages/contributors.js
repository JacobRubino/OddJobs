import React from "react"
import {FaGithub} from 'react-icons/fa'
import './contributors.css'

const contributers = () => {
    return (
        <div>
            <p>Evan Sterling Miller
                <a href="https://github.com/EvanSterlingMiller">
                    <li>
                        <FaGithub /> 
                    </li>
                </a>
            </p>
            <p>Sudarshan Samaddar
                <a href="https://github.com/meetsudarshan">
                    <li>
                        <FaGithub /> 
                    </li>
                </a>
            </p>
            <p>Jacob Rubino
                <a href="https://github.com/JacobRubino">
                    <li>
                        <FaGithub /> 
                    </li>
                </a>
            </p>
            <p>Matt Fleming
                <a href="https://github.com/chartpro-com">
                    <li>
                        <FaGithub /> 
                    </li>
                </a>
            </p>
            <p>Roxy Osorio
                <a href="https://github.com/rosebudroro">
                    <li>
                        <FaGithub /> 
                    </li>
                </a>
            </p>
        </div>
    )
}
export default contributers