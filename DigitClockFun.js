import React,{useState,useEffect} from 'react'
function DigitClockFun(){
    const [mytime,setTime]=useState('');
    const tick=()=>{
        let time=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
       
        if(new Date().getHours()<12){
            time=time+ "AM";
        }
        else{
            time=time+ "PM";  
        }
        setTime(time);
    }
    useEffect(()=>{
        const t=setInterval(tick,1000);
        return ()=>{
            clearInterval(t);
        }
    },[mytime])
    console.log("Time",mytime);
    return(
        <div>
            <h1>DigitalClock with Function</h1>
            <h2>{mytime}</h2>
        </div>
    );
}
export default DigitClockFun;

