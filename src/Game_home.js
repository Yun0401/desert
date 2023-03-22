import './style/Game_home.css';
import { useState } from 'react';

function HomePage() { //story0
    const story = [ //遊戲前提
        "19世紀，各地探險隊如雨後春筍般的湧現",
        "你們也是其中的探險隊、為了傳說中的寶藏而深入沙漠當中探索，期待著能在此旅途中有所收穫",
        "然而，一場突如其來的沙塵暴無聲訴說著著現實的殘酷，你們在沙漠中迷失了方向。",
        "隨著時間的流逝，沙漠中毒辣的太陽將你們烤得口乾舌燥、攜帶的水也漸漸見底。",
        "如今，比起遠在天邊的寶藏，你們更需要物資的補充。",
        "面對著無涯的沙漠，你們該如何生存下去..."]
    const [context,setContext] = useState(story[0]) //計算故事棒到哪裡
    const [count,setCount] = useState(1)
    const Next = () => { //切換故事
        setCount(count+1)
        if (count<5){
            setContext(story[count])
        }
        else if(count === 5){
          setContext(story[count])
          document.getElementById('start_p_btn_next').classList.add("notshow")
          document.getElementById('start_p_btn_start').classList.remove("notshow")
        }
    }
    const Start = () =>{ //遊戲開始後切換網址
      window.location.href='/story1-1'
    }

  return ( //page 的樣子
    <div className='Game'>
      <div className='story'><p>{context}</p></div>
      <button id = 'start_p_btn_next' className='btn_next' onClick = {Next}>Next</button>
      <button id = 'start_p_btn_start' className='btn_start notshow' onClick = {Start}>Start</button>
    </div>
  );
}

export default HomePage;