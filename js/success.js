window.onload=function(){
    var restartB,
        time;
    restartB=document.getElementById('success');
    time=document.getElementById('time');
    time.innerHTML=localStorage.getItem("time");
    if (restartB) {
        restartB.addEventListener('click', function (e) {
            console.log("打开");
            window.open('index.html', '_self');
        })
    }
    else console.log('unsuccess');
};