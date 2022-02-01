function Projects(){
    const path = process.env.PUBLIC_URL;
    
    return(
        <section id="projects">
            <h1>PROJECTS</h1>
            <div className="list">
                <div className="pic">
                    <img src={`${path}/img/reactEnterprise.png`} />
                </div>
                <div className="txt">
                    <h2>UFOLIO_리액트 기업형 사이트</h2>
                    <p>리액트를 이용한 기업형 사이트입니다. Main, Department(조직도), Community(crud), Gallery(Flickr API), Youtube(Youtube API), Location(Kakao map API), Join(회원가입) 페이지로 구성되어있으며, redux를 이용해 유튜브 데이터를 store에 저장시켜 상태관리하고 YOUTUBE 페이지에 저장된 데이터를 출력시켜주었습니다. </p>
                    <ul className="skill">
                        <li>REACT</li>
                        <li>REDUX</li>
                        <li>SCSS</li>
                    </ul>
                    <ul className="link">
                        <li><a href="https://uvin1016.github.io/portfolio_react_enterprise/" target="_blank">WEBSITE DEMO</a></li>
                        <li><a href="https://github.com/uvin1016/portfolio_react_enterprise" target="_blank">GITHUB</a></li>
                        <li><a href={`${path}/pdf/portfolio_enterprise 작업설명서.pdf`} target="_blank">작업설명서.pdf</a></li>
                    </ul>
                </div>
            </div>
            <div className="list">
                <div className="pic">
                    <img src={`${path}/img/reactEnterprise.png`} />
                </div>
                <div className="txt">
                    <h2>UFOLIO_리액트 기업형 사이트</h2>
                    <p>리액트를 이용한 기업형 사이트입니다. Main, Department(조직도), Community(crud), Gallery(Flickr API), Youtube(Youtube API), Location(Kakao map API), Join(회원가입) 페이지로 구성되어있으며, redux를 이용해 유튜브 데이터를 store에 저장시켜 상태관리하고 YOUTUBE 페이지에 저장된 데이터를 출력시켜주었습니다. </p>
                    <ul className="skill">
                        <li>REACT</li>
                        <li>REDUX</li>
                        <li>SCSS</li>
                    </ul>
                    <ul className="link">
                        <li><a href="https://uvin1016.github.io/portfolio_react_enterprise/" target="_blank">WEBSITE DEMO</a></li>
                        <li><a href="https://github.com/uvin1016/portfolio_react_enterprise" target="_blank">GITHUB</a></li>
                        <li><a href={`${path}/pdf/portfolio_enterprise 작업설명서.pdf`} target="_blank">작업설명서.pdf</a></li>
                    </ul>
                </div>
            </div>
            <div className="list">
                <div className="pic">
                    <img src={`${path}/img/reactEnterprise.png`} />
                </div>
                <div className="txt">
                    <h2>UFOLIO_리액트 기업형 사이트</h2>
                    <p>리액트를 이용한 기업형 사이트입니다. Main, Department(조직도), Community(crud), Gallery(Flickr API), Youtube(Youtube API), Location(Kakao map API), Join(회원가입) 페이지로 구성되어있으며, redux를 이용해 유튜브 데이터를 store에 저장시켜 상태관리하고 YOUTUBE 페이지에 저장된 데이터를 출력시켜주었습니다. </p>
                    <ul className="skill">
                        <li>REACT</li>
                        <li>REDUX</li>
                        <li>SCSS</li>
                    </ul>
                    <ul className="link">
                        <li><a href="https://uvin1016.github.io/portfolio_react_enterprise/" target="_blank">WEBSITE DEMO</a></li>
                        <li><a href="https://github.com/uvin1016/portfolio_react_enterprise" target="_blank">GITHUB</a></li>
                        <li><a href={`${path}/pdf/portfolio_enterprise 작업설명서.pdf`} target="_blank">작업설명서.pdf</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects;