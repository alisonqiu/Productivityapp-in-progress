import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button'
import homeStyles from '../styles/Home.module.css'

export default function Home() {

  const timeDisplay = '0:00';
  const focusedWork = '0:00';
  
  
  let ok = 1;
  
  let min = 0;
  let focusedMin = 0;
  let sec = 0;
  let focusedSec = 0;
  let minSec = null;
  let focused = null;
  let totalFocusedWork = 0;
  const workInterval = 25;
  const shortBreakInterval = 5;
  const longBreakInterval = 15;
  //let pomodoroNumber = 3;

  // const workBtn = function (){
  //   if(ok == 1) {
  //     ok = 0;
  //     timePassed(workInterval);
  //     focusedWorkTime(workInterval);
  // }}
  
  
  // const shortBreakBtn = function(){
  //     if(ok == 1) {
  //     ok = 0;
  //     timePassed(shortBreakInterval);
  // }
  // }
  
  // const longBreakBtn = function(){
  //     if(ok == 1) {
  //     ok = 0;
  //     timePassed(longBreakInterval);
  //     }
  // }
  
  // function timePassed(maxTime){
  //      minSec = setInterval(function() {
  //         sec += 1;
  //         if (sec == 60){
  //             min += 1;
  //             sec = 0;
  //         }
  //         if (sec <= 9){
  //             timeDisplay.textContent = min + ':0' + sec;
  //         } else{
  //             timeDisplay.textContent = min + ':' + sec;
  //         }
  //         if(min == maxTime){
  //             var audio = new Audio('violin.wav');
  //             audio.play();
  //             min = 0;
  //             ok = 1;
  //             timeDisplay.textContent = '0:00';
  //             clearInterval(minSec);
  //         }
  //     },1000)
      
  // }
  
  // function focusedWorkTime(maxTime){
  //     focused = setInterval(function() {
  //         focusedSec += 1;
  //         if (focusedSec == 60){
  //             focusedMin += 1;
  //             focusedSec = 0;
  //         }
  //         if (focusedSec <= 9){
  //             focusedWork.textContent = totalFocusedWork + focusedMin + ':0' + focusedSec;
  //         } else{
  //             focusedWork.textContent = totalFocusedWork + focusedMin + ':' + focusedSec;
  //         }
  //         if(focusedMin == maxTime){
  //             focusedMin = 0;
  //             totalFocusedWork += workInterval;
  //             //             if(pomodoroNumber > 1) {
  //             //     pomodoroNumber -= 1;
  //             // } else {
  //             //     pomodoroNumber = 3;
  //             // }
  //             clearInterval(focused);
  //         }
  //     },1000)
     
  //}

  return (
  <div className={homeStyles.home}>
    <Head>
        <title>Pomodoro timer</title>
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@100&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Bahiana&display=swap" rel="stylesheet"/>
    </Head>

    <body className={homeStyles.body}>
        <div className={homeStyles.container}>
            <div className={homeStyles.ceas}>
                <div className={homeStyles.interiorceas}>

                    <div className={homeStyles.focusedWork}>
                        <h3 id="focused-work">{focusedWork}</h3>
                    </div>
                    <div className={homeStyles.timp} id="time-display">
                        {timeDisplay}
                    </div>
                    
                    <div className={homeStyles.afisajSlot}>
                        <div className="slot work">
                            <h3>Work time!</h3>
                        </div>
                        <div className={homeStyles.slot, homeStyles.shortBreak}>
                            <h3>Short break!</h3>
                        </div>
                        <div className={homeStyles.slot, homeStyles.shortBreak}>
                            <h3>Long break!</h3>
                        </div>
                    </div>
                    <div className={homeStyles.butoane}>
                        <div className={homeStyles.buton}>
                            <Button onClick={workBtn} className={homeStyles.bulina} />
                        </div>
                        <div className={homeStyles.buton}>
                            <Button onClick={shortBreakBtn} className={homeStyles.bulina} /> 
                        </div>
                        <div className={homeStyles.buton}>
                            <Button onClick={longBreakBtn} className={homeStyles.bulina} /> 
                        </div>

                    </div>

                </div>
            </div>

            
                <div className={homeStyles.rotita1}>
                    <div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div>
                    <div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div>
                    <div className={homeStyles.linie}></div><div className={homeStyles.linie}></div><div className={homeStyles.linie}></div>
                </div>
                <div className={homeStyles.rotita2}></div>
            

            <div className={homeStyles.picior}>

            </div>
        </div>
    </body>
  </div>
  )
}
