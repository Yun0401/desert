import './style/story1.css';
import { useState } from 'react';

function HomePage() { //story1-1
    const story = [ //遊戲概況進行說明
        "在茫茫沙漠中，要往哪裡走呢","Opps,不小心迷路了呢","ㄟ，前方好像有什麼東西"]
    const [context,setContext] = useState(story[0])
    const pic_url = ['plant00.png','plant01.png','plant02.png','plant03.png','plant04.png','plant05.png']
    const correct = [1,2,2,1,3]
    const pic = [
        [1,0,1,4,3,0],
        [0,2,3,2,4,0],
        [0,1,2,3,5,0]
    ]
    const [stage,setStage] = useState(0)
    const NextStage  = (choose) =>{
        if (choose === correct[stage]){
            
            if (stage === 4){
                document.getElementById("plant_pic_L").classList.add("notshow")
                document.getElementById("plant_pic_M").classList.add("notshow")
                document.getElementById("plant_pic_R").classList.add("notshow")
                document.getElementById("well_div").classList.remove("notshow")
                setContext(story[2])
            }
            else if (stage < 4){
                document.getElementById("plant_pic_L").setAttribute("src",pic_url[pic[0][stage+1]])
                document.getElementById("plant_pic_M").setAttribute("src",pic_url[pic[1][stage+1]])
                document.getElementById("plant_pic_R").setAttribute("src",pic_url[pic[2][stage+1]])
                setStage(stage+1)
                setContext(story[0])
                console.log(stage)
            }
            
        } 
        else {
            setStage(0)
            setContext(story[1])
            document.getElementById("plant_pic_L").setAttribute("src",pic_url[pic[0][0]])
            document.getElementById("plant_pic_M").setAttribute("src",pic_url[pic[1][0]])
            document.getElementById("plant_pic_R").setAttribute("src",pic_url[pic[2][0]])
        }
    }
    // const [context,setContext] = useState(story[0]) //計算故事棒到哪裡
    // const [count,setCount] = useState(1)
    // const Next = () => { //切換故事
    //     setCount(count+1)
    //     if (count<5){
    //         setContext(story[count])
    //     }
    //     else if(count === 5){
    //       setContext(story[count])
    //       document.getElementById('start_p_btn_next').classList.add("notshow")
    //       document.getElementById('start_p_btn_start').classList.remove("notshow")
    //     }
    // }
    // const Start = () =>{ //遊戲開始後切換網址
    //   window.location.href='/story1'
    // }

  return ( //page 的樣子
    <div className='Story1'>
        <div className='Findwell'>
            <p>{context}</p>
            <div onClick={()=>{NextStage(1)}}> <img id = "plant_pic_L" src='plant01.png' alt="plant"/></div>
            <div onClick={()=>{NextStage(2)}}> <img id = "plant_pic_M" src='plant00.png' alt="plant"/></div>
            <div onClick={()=>{NextStage(3)}}> <img id = "plant_pic_R" src='plant00.png' alt="plant"/></div>
            <div id = "well_div" className='well notshow'> <img id = "well" src='well_s.png' alt="well"/></div>
            <p>此井無水三百升</p>
        </div>
      {/* <div className='story'><p>{context}</p></div> */}
      {/* <button id = 'start_p_btn_next' className='btn_next' onClick = {Next}>Next</button>
      <button id = 'start_p_btn_start' className='btn_start notshow' onClick = {Start}>Start</button> */}
    </div>
  );
}

export default HomePage;