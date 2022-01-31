import Intro from "./Intro";
import Projects from "./Projects";
import Etc from "./Etc";

function Main(){
    return(
        <main>
            <div className="inner">
                <Intro />
                <Projects />
                <Etc />
            </div>
        </main>
    )
}

export default Main;