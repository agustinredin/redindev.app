import FloatingEmailButton from "../ui/FloatingEmailButton"
import About from "./About"
import Hero from "./Hero"
import Services from "./Services"
import Skills from "./Skills"
import Timeline from "./Timeline"
import WorkingProcess from "./WorkingProcess"
import Works from "./Works"

export const Home = () => {
    return (
        <>
            <FloatingEmailButton/>
            <Hero/>
            <Skills/>
            <Services/>
            <Works/>
            <WorkingProcess/>
            <Timeline/>
            <About/>
        </>
    )
}