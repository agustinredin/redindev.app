import Typical from 'react-typical';

const Typewriter = ({ messages, delay }) => {
    const steps = messages.flatMap(message => [message, delay]);

    return (
            <Typical
                steps={steps}
            />
        
    );
}

export default Typewriter;
