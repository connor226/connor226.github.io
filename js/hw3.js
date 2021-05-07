const timer = setInterval(myTimer, 0);

function myTimer() {
    const time_p = document.getElementById("hw3-date");
    if(!time_p)  console.log('NMSL');
    let current_time = new Date();
    time_p.innerHTML = (("0"+(current_time.getMonth()+1)).slice(-2)) +"-"+ (("0"+current_time.getDate()).slice(-2)) +"-"+ (current_time.getFullYear()) +" "+ (("0"+current_time.getHours()).slice(-2)) +":"+ (("0" + current_time.getMinutes()).slice(-2)) +":"+ (("0" + current_time.getSeconds()).slice(-2));
}




