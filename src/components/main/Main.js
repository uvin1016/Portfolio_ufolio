import Intro from "./Intro";
import Projects from "./Projects";
import Etc from "./Etc";
import Btns from "../common/Btns";
import Anime from "../../class/anime";
import { useEffect, useRef, useState } from "react";

function Main(){
    const main = useRef(null);
    let pos = useRef([]);
    const [index,setIndex] = useState(0);

    const getIndex = index=>{
        setIndex(index);
    }

    const handleResize = ()=>{
        const secs = main.current.querySelectorAll('.myscroll');
        let arr = [];
        for(let sec of secs) arr.push(sec.offsetTop - 200);
        pos.current = arr;
    }

    const handleScroll = ()=>{
        let scroll = window.scrollY;
        const btns = main.current.querySelectorAll('#btns li');

        pos.current.map((pos,index)=>{
            if(scroll >= pos){
                for(const btn of btns ) btn.classList.remove('on');
                btns[index].classList.add('on');
            }
        })
    }

    useEffect(()=>{
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        new Anime(window, {
            prop: 'scroll',
            value: pos.current[index],
            duration: 500
        })

        return ()=>{
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    },[index])

    return(
        <main ref={main}>
            <div className="inner">
                <Intro />
                <Projects />
                <Etc />
            </div>
            <Btns getIndex={getIndex} />
        </main>
    )
}

export default Main;