import Intro from "./Intro";
import Experience from "./Experience";
import Projects from "./Projects";
import Etc from "./Etc";

function Main(){
    return(
        <main>
            <div className="inner">
                <Intro />
                <Experience />
                <Projects />
                <Etc />
            </div>
        </main>
    )
}

export default Main;