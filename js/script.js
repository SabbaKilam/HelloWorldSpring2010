///////////////////////////////////////////////
/**
// Author: Abbas Abdulmalik
// Creation Date: Jan 20, 2015
// Revised: N/A
// Note: Main script to go with first phoneGapBuild
// mobile app spring 2015, PIT. 
//
*/
///////////////////////////////////////////////
var contentDiv = O("content");
window.onload = resize;
window.onresize = resize;
O("content").onclick = function(){
    alert("PhoneGap Build!");
}
//-------------------------
function resize(){
    S(document.documentElement).fontSize = innerWidth/100 + "px";
}