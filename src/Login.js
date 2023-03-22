import './style/Login.css';
// import { useState } from 'react';

function Login() { //story0

    const checker = (uncheck_id) =>{ //檢查id是否符合標準
        if(uncheck_id.length !== 8){ //8位數
            return false
        }
        var head = uncheck_id.charCodeAt(0)-48 //數字 0=0, 英文 A=17 E=21 I=25 M=29 Q=33 U=37 X=40 
        const low = Math.floor(head/8) //除數位置
        const high = head%8
        if(low === high || low*high === 0){ //位置不能為 0~9(00~11), B(22), H(30), K(33), P(40), T(44), X(50) (8進位)
            return false
        }
        let a = 0
        let b = 0
        for(let i = 1;i<8;i++){
            if( i===low || i === high){
                b = b*43 + uncheck_id.charCodeAt(i)-48 //除數 ~1848
                //BH=>798
            }
            else{
                a = a*41 +uncheck_id.charCodeAt(i)-48 //被除數 2825761~121649010
                //9S0RD => 27845498
                //餘86 => head=I
                //id = IB9HS0RD
                //VI93WOVV
            }
        }
        if((a%b)%26+17 === head){ //check
            return true
        }
        return false
    }
    
    const Login_check = () =>{ //遊戲開始後切換網址
        const player_id = document.getElementById('game_id').value

        if(checker(player_id)){ //id 符合標準
            window.location.href='/story0'
        }
        else{
            alert('wrong id')
        }
      
    }
    

  return ( //page 的樣子
    <div className='Login'>
        <h1>Among Key</h1>
        <form className='login_input'>
            <label>id</label>
            <input id='game_id' type='text'></input>
        </form>
        <button id = 'login_btn' className='login_btn' onClick = {Login_check}>Login</button>
    </div>
  );
}

export default Login;