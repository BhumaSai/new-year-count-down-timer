let ele1 = document.getElementById('one');
let heart = document.getElementById('two');
let time2 = document.getElementById('time');
// present time
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let days = document.getElementById('days')
let milli = document.getElementById('milli')
let year = document.getElementById('head')



// year days calculation code
let completedDays 
let totalDays = new Date().getFullYear() % 4==0? 12*30+6:12*30+5;
let leapY = new Date().getFullYear() % 4==0?29:28
   switch (new Date().getMonth()) {
      case 0:
         completedDays = 1*31-new Date().getDate()
         break;
      case 1:
         completedDays =(2*30-1)-(leapY-new Date().getDate())
         break;
      case 2:
         completedDays = 3*30-(31-new Date().getDate())
         break;
      case 3:
         completedDays = 4*30-(30-new Date().getDate())
         break;
      case 4:
         completedDays = (5*30+1)-(31-new Date().getDate())
         break;
      case 5:
         completedDays = (6*30+1)-(30-new Date().getDate())
         break;
      case 6:
         completedDays = (7*30+2)-(31-new Date().getDate())
         break;
      case 7:
         completedDays = (8*30+3)-(31-new Date().getDate())
         break;
      case 8:
         completedDays = (9*30+3)-(30-new Date().getDate())
         break;
      case 9:
         completedDays = (10*30+3)-(31-new Date().getDate())
         break;
      case 10:
         completedDays = (11*30+4)-(30-new Date().getDate())
         break;
      case 11:
         completedDays = (12*30+5)-(31-new Date().getDate());
         break;
      default:
         break;
   }
// year days calcualtion code end

// animation
function hello() {
    const val=Math.floor(Math.random()*10*10)+'%';
      if( new Date().getDate() === 1 && new Date().getMonth() === 1){
         year.innerText = "happy  new  year";
         year.style.textTransform = 'uppercase'
         if(ele1.childElementCount<=10){
            let el= ele1.appendChild(document.createElement('h2'))
            el.setAttribute('id','party')
            el.innerText='🎈'
            el.style.left = val;
         }else{
            ele1.removeChild(ele1.firstElementChild)   
         }
      }else{
         year.innerText =(new Date().getFullYear()+1)+" COUNT DOWN"
         if(ele1.childElementCount<=10){
            let el= ele1.appendChild(document.createElement('h2'))
            el.setAttribute('id','love')
            el.innerText='💧'
            el.style.left = val;
         }else{
            ele1.removeChild(ele1.firstElementChild)   
         }
      }
      
   }


setInterval(hello,200)
// animation end


// countdown function 
function time(){
   let d =  new Date()
   let hour = (23-d.getHours());
   days.innerText = (totalDays-completedDays)<10?"0"+(totalDays-completedDays):totalDays-completedDays
   hours.innerText = hour<10?"0"+hour:hour
   minutes.innerText = (59-d.getMinutes())<10?"0"+(59-d.getMinutes()):59-d.getMinutes()
   seconds.innerText = (59-d.getSeconds())<10?"0"+(59-d.getSeconds()):59-d.getSeconds()
}
setInterval(time,1000)
// countdown function end


// new  year functionality


