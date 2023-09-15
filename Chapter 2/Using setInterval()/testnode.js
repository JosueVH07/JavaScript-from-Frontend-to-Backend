console.log(time(), "Start of timer");
var count = 1;
setInterval(function() {
  console.log(time(), `count = ${count}`);
  count++;
}, 1000);    // 1000 = 1 second


console.log(time(), "Start of timer")
var count  = 1
var timmer = setInterval(() => {
    console.log(time(), `Count: ${count}`)
    if (count === 10) {
        clearInterval(timmer)
        console.log(time(), "End of timer")
    } else count ++
})
function time() {
 // return time as HH:MM:SS
 var date = new Date();
 var hour = date.getHours();
 var min = date.getMinutes();
 var sec = date.getSeconds();
 if (hour < 10) hour = "0" + hour;
 if (min < 10) min = "0" + min;
 if (sec < 10) sec = "0" + sec;
 return "" + hour + ":" + min + ":" + sec + " ";
}
