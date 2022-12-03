//intro active
let span = document.querySelectorAll('.letters');
let rtext = document.querySelectorAll('.rtext');
let slide = document.querySelectorAll('.slide');
const left = document.getElementById("left");
var once = false;

window.addEventListener('DOMContentLoaded', ()=>{
        span.forEach((s,i)=>{
            setTimeout(()=>{
                s.classList.add('active');
            }, (i) * 80)
        });    
        setTimeout(()=>{
            rtext.forEach((t)=>{
                t.style.opacity = '1';
            });
        },1000);
        setTimeout(()=>{
            slide.forEach((sl,i)=>{
                setTimeout(()=>{
                    sl.classList.add('active');
                }, (i) * 150)
            }); 
        },3000);
});

//sliding div
const handleMove = e => {
    if(e.clientX/window.innerWidth > .85) {
        once = true;
    }
    if(once){  
        slide.forEach((sl,i)=>{
                sl.style.transition = '.1s';
                sl.style.opacity = '0';
        }); 
        left.style.width = `${e.clientX / window.innerWidth * 100}%`;
        if(e.clientX/window.innerWidth < .1) {
         //console.log("timer on");
            document.getElementById("hours").style.visibility = "visible";
            document.getElementById("minutes").style.visibility = "visible";
            document.getElementById("seconds").style.visibility = "visible";
        }
    }
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);

//timer text




var countDownDate = new Date("Jan 1, 2023 20:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var hours = Math.floor(distance/1000/60/60);
    var minutes = Math.floor(distance%(1000*60*60)/(1000*60));
    var seconds = Math.floor(distance%(1000*60)/1000);
    document.getElementById("hours").innerHTML=hours + "h";
    document.getElementById("minutes").innerHTML=minutes + "m";
    document.getElementById("seconds").innerHTML=seconds + "s";
    if(distance<0){
        clearInterval(x);
        document.getElementById("hours").innerHTML= OPEN
        document.getElementById("minutes").innerHTML= "",
        document.getElementById("seconds").innerHTML= "";
    }
},1000);

