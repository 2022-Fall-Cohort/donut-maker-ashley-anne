var totalDonuts = 0;
var totalClicker = 0;
document.getElementById("purchase-auto-clicker").addEventListener("click",(e) => {
    totalDonuts -= 10;
    totalClicker++;
    document.getElementById("auto-clickers-total").innerHTML=totalClicker;
    setInterval(function () 
    {
        if (totalDonuts >=10){
            totalDonuts++;
            document.getElementById("donut-count").innerHTML= totalDonuts;
        }
        else {
          console.log("You don't have enough donuts. Keep going!");
          return;
        }
    } ,1000)});
document.getElementById("homer").addEventListener("click", (e) => {
    totalDonuts++;
    document.getElementById("donut-count").innerHTML= totalDonuts;
})