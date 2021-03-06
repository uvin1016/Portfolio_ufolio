import { useEffect, useRef } from "react";

function Intro(){
    const tit = useRef(null);

    const handleScroll = ()=>{
        const title = tit.current.querySelectorAll("h1");
        let scroll = window.scrollY || window.pageYOffset;
        
        if(scroll > 0) {
            title[0].style.transform = `translateX(${scroll}px)`;
            title[1].style.transform = `translateX(-${scroll}px)`;
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])

    return(
        <section id="intro">
            <div className="inner">
                <div className="titleBox" ref={tit}>
                    <h1>WELLCOME TO UFOLIO I'M</h1>
                    <h1>FRONTEND DEVELOPER</h1>
                </div>
                <p className="introBox">
                    안녕하세요. <br /> 
                    신입 프론트엔드 개발자 이유빈입니다.
                    제가 상상하던 프로젝트가 문자를 통해 시각적으로 실현되는 과정을 좋아합니다. 앞으로 사용자의 편리함과 시각적인 즐거움을 실용적으로 구현해낼 수 있도록 배움을 놓지 않겠습니다.
                </p>
            </div>
        </section>
    )
}

export default Intro;