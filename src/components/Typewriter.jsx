import Typical from 'react-typical';
import { useRef } from 'react'

const Typewriter = ({ messages, delay, wrapperTag }) => {
    const steps = messages.flatMap(message => [message, delay]);
    const elementRef = useRef(null)

    return (
        <div ref={elementRef}>
            <Typical
                steps={steps}
                loop={Infinity}
                wrapper={wrapperTag}
            />
        </div>
    );
}

export default Typewriter;
