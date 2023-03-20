var time = 60;
var timer = setInterval(function(){
    time--;
    if(time <= 0){
        clearInterval(timer);
        document.title = "正在跳转..."
        window.location.href = "./index.html";
    }
    document.querySelector(".font-h3-1").innerHTML = time;
    document.querySelector(".font-h3-2").innerHTML = time;
    if(time > 0){
        document.title = "距离互联网恢复还剩：" + time + "秒";
    }
    if(time < 2){
        document.querySelector(".distance_en_us_3").innerHTML = "SECOND";
    }
},1000);