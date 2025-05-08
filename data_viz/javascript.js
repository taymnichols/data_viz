var headlineArray = ["next headline", "another headline", "yet another headline"];
var headlineIndex = 0;
var headlineLength = headlineArray.length;
var myLoop = setInterval(changeHeadline,1000);

function changeHeadline() {
    var headlineelement = document.getElementById("headline");
    var newHeadline = headlineArray[headlineIndex];
    headlineelement.innerHTML = newHeadline;
    headlineIndex++;
    if headlineIndex >= headlineLength {
        clearInterval(myLoop);
    }
   
}

// run function

window.onload = changeHeadline(myLoop)