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
                    <h2>UFOLIO_리액트 기업형 사이트(반응형)</h2>
                    <p>리액트를 이용한 기업형 사이트입니다. Main, Department(조직도), Community(crud), Gallery(Flickr API), Youtube(Youtube API), Location(Kakao map API), Join(회원가입) 페이지로 구성되어있으며, redux를 이용해 유튜브 데이터를 store에 저장시켜 상태관리하고 YOUTUBE 페이지에 저장된 데이터를 출력시켜주었습니다. </p>
                    <ul className="skill">
                        <li>REACT</li>
                        <li>REDUX</li>
                        <li>SCSS</li>
                        <li>AXIOS</li>
                    </ul>
                    <ul className="link">
                        <li><a href="https://uvin1016.github.io/portfolio_react_enterprise/" target="_blank">WEBSITE DEMO</a></li>
                        <li><a href="https://github.com/uvin1016/portfolio_react_enterprise" target="_blank">GITHUB</a></li>
                        <li><a href={`${path}/pdf/portfolio_react_enterprise 작업설명서.pdf`} target="_blank">작업설명서.pdf</a></li>
                    </ul>
                </div>
            </div>
            <div className="list">
                <div className="pic">
                    <img src={`${path}/img/enterprise.png`} />
                </div>
                <div className="txt">
                    <h2>UFOLIO_기업형 사이트(반응형)</h2>
                    <p>Vanila JS를 이용한 기업형 사이트입니다. Main, Department(조직도), Community(Tab), Gallery(Flickr API), Youtube(Youtube API), Location(Kakao map API), Join(회원가입) 페이지로 구성되어있으며, 반응형으로 작성되었습니다.</p>
                    <ul className="skill">
                        <li>JAVASCRIPT</li>
                        <li>SCSS</li>
                        <li>FETCH</li>
                    </ul>
                    <ul className="link">
                        <li><a href="https://uvin1016.github.io/portfolio_enterprise/" target="_blank">WEBSITE DEMO</a></li>
                        <li><a href="https://github.com/uvin1016/portfolio_enterprise" target="_blank">GITHUB</a></li>
                        <li><a href={`${path}/pdf/portfolio_enterprise 작업설명서.pdf`} target="_blank">작업설명서.pdf</a></li>
                    </ul>
                </div>
            </div>
            <div className="list">
                <div className="pic">
                    <img src={`${path}/img/reactMusicplayer.png`} />
                </div>
                <div className="txt">
                    <h2>UFOLIO_리액트 뮤직플레이어</h2>
                    <p>리액트와 파이어베이스를 이용한 뮤직플레이어 토이 프로젝트입니다. 뮤직플레이어는 간단하게 JSON으로 만든 데이터를 불러와 음악과 이미지를 삽입하여 재생/정지 가능하도록 하였고, 파이어베이스를 이용해 구글로그인 기능과 채팅창을 구현하였습니다. </p>
                    <ul className="skill">
                        <li>REACT</li>
                        <li>FIREBASE</li>
                        <li>SCSS</li>
                    </ul>
                    <ul className="link">
                        <li><a href="https://uvin1016.github.io/portfolio_react_music/" target="_blank">WEBSITE DEMO</a></li>
                        <li><a href="https://github.com/uvin1016/portfolio_react_music" target="_blank">GITHUB</a></li>
                        <li><a href={`${path}/pdf/portfolio_enterprise 작업설명서.pdf`} target="_blank">작업설명서.pdf</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects;