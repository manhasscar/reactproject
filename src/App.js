import "./App.css";
import { useState } from "react";

function App() {
    let [titles, setTitles] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]);
	let [like, setLike] = useState([0, 0, 0]);
    let [titleNum, setTitleNum] = useState(0);
    let [isModalOn, setIsModalOn] = useState(false);
    let [input, setInput] = useState('');
    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>

            {
                titles.map((title, i) => {
                    return (
                    <div className="list" key={i}> 
                        <h4 onClick={ () => { 
                            setTitleNum(i); 
                            isModalOn === true ? setIsModalOn(false) : setIsModalOn(true); 
                            } }>
                            { title } 
                            <span onClick={(e) => {
                                e.stopPropagation();
                                let copyLike = [...like];
                                copyLike[i] = copyLike[i] + 1;
                                setLike(copyLike); }
                                }>
                                👍
                            </span> 
                            { like[i] }
                        
                        </h4>                   
                        <p>2월 17일 발행</p>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            let copyTitels = [...titles]; 
                            copyTitels.splice(i,1); 
                            setTitles(copyTitels)
                            }}>
                            글 삭제
                        </button>
                    </div>
                    );
                })
            }

            {
                isModalOn === true ? <Modal titles={titles} titleNum={titleNum} ></Modal> : null
            }

            <input onChange={(e) => { setInput(e.target.value) }}></input>
            <button onClick={() => {let copyTitels = [...titles]; copyTitels.push(input); setTitles(copyTitels)}}>추가</button>
        </div>
    );
}

const Modal = (props) => {
    return (
        <div className="modal">
            <h4>{ props.titles[props.titleNum] }</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    );
}

export default App;
