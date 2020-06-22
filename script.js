function Stopwatch() {
var seconds=0
var minutes=0
var hours=0;
var miliseconds=0;
timer=document.getElementById('duration');
isRunnig=false;
var duration;
    this.start = function () {
       
        if (isRunnig) {
            return;
        }

        isRunnig = true;
        duration=setInterval(function(){ 
       miliseconds++
      
       if(miliseconds>=100){ 
          miliseconds=0; 
        seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        console.log(seconds);
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        
    } 
}
timer.innerHTML=(hours ? (hours > 9 ? hours : "0" + hours) : "00")
 + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
  + ":" + (seconds > 9 ? seconds : "0" + seconds)+ ":" +
   (miliseconds>99? miliseconds :+miliseconds);
   
},10);
    }

    this.stop = function () {
        
        if (!isRunnig) {
           return;
        }
      isRunnig=false;
       clearInterval(duration);
    }

    

    this.restart = function () {
        if(!isRunnig){ 
        isRunnig = false;
    }
        seconds=0,hours=0,minutes=0,miliseconds=0;
        timer.innerHTML='00:00:00:00';
    }

}

var stopwatch = new Stopwatch();

function Start(){
    stopwatch.start();
}
function Stop(){
    stopwatch.stop();
   
}
function Restart(){
    stopwatch.restart();
}