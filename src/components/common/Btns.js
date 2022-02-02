function Btns(props){
    return(
        <ul id="btns">
            <li onClick={()=>props.getIndex(0)}></li>
            <li onClick={()=>props.getIndex(0)}></li>
            <li onClick={()=>props.getIndex(0)}></li>
        </ul>
    )
}

export default Btns;